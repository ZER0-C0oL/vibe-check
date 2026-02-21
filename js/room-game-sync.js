/* ===================================
   Party Games Hub – Room Game Sync
   Host-authoritative room sync helper
   =================================== */

function createRoomGameSync({ gameId, getState, applyState, onHostChange }) {
  const roomMode = typeof isRoomMode === 'function' && isRoomMode();

  const noop = {
    init: async () => {},
    publish: async () => false,
    canInteract: () => true,
    getHostInfo: () => ({ isRoomMode: false, isHost: true, hostId: '', hostName: '' })
  };

  if (!roomMode) return noop;

  const session = typeof getRoomSession === 'function' ? getRoomSession() : { roomId: '', playerId: '', playerName: '' };
  const roomId = String(session.roomId || '').trim().toUpperCase();

  if (!roomId) return noop;

  let pollTimer = null;
  let pollInFlight = false;
  let lastAppliedVersion = -1;
  let lastKnownSnapshot = null;
  let isHost = false;
  let hostId = '';
  let hostName = '';

  function safeHostName(players, id) {
    const found = (players || []).find(p => p.id === id);
    return found?.name || '';
  }

  function updateHostInfo(room) {
    const prevIsHost = isHost;
    hostId = room?.hostId || '';
    hostName = safeHostName(room?.players || [], hostId);
    isHost = Boolean(session.playerId && hostId && session.playerId === hostId);
    if (typeof onHostChange === 'function' && prevIsHost !== isHost) {
      onHostChange({ isHost, hostId, hostName });
    }
  }

  function extractPayload(room) {
    const payload = room?.currentPrompt;
    if (!payload || typeof payload !== 'object') return null;
    if (payload.gameId !== gameId) return null;
    if (!Object.prototype.hasOwnProperty.call(payload, 'snapshot')) return null;
    if (typeof payload.version !== 'number') return null;
    return payload;
  }

  async function syncFromRoom() {
    if (pollInFlight) return;
    pollInFlight = true;

    try {
      const room = await apiGetRoomState(roomId);
      updateHostInfo(room);

      if (isHost && room.currentGame !== gameId) {
        await apiUpdateRoomState(roomId, { currentGame: gameId });
      }

      const payload = extractPayload(room);
      if (!payload) return;
      if (payload.version <= lastAppliedVersion) return;

      lastAppliedVersion = payload.version;
      lastKnownSnapshot = payload.snapshot;
      applyState(payload.snapshot);
    } catch {
      // best-effort sync
    } finally {
      pollInFlight = false;
    }
  }

  async function publish() {
    try {
      const room = await apiGetRoomState(roomId);
      updateHostInfo(room);

      const currentPayload = extractPayload(room);
      const nextVersion = typeof currentPayload?.version === 'number' ? currentPayload.version + 1 : 1;
      const snapshot = getState();

      await apiUpdateRoomState(roomId, {
        currentGame: gameId,
        currentPrompt: {
          gameId,
          snapshot,
          version: nextVersion
        }
      });

      lastAppliedVersion = nextVersion;
      lastKnownSnapshot = snapshot;
      return true;
    } catch {
      return false;
    }
  }

  function canInteract() {
    if (isHost) return true;
    const turnName = lastKnownSnapshot && typeof lastKnownSnapshot.turnName === 'string'
      ? lastKnownSnapshot.turnName
      : '';
    return Boolean(turnName && session.playerName && session.playerName === turnName);
  }

  function getHostInfo() {
    return {
      isRoomMode: true,
      isHost,
      hostId,
      hostName
    };
  }

  async function init() {
    await syncFromRoom();
    if (!pollTimer) {
      pollTimer = setInterval(syncFromRoom, 2500);
      window.addEventListener('beforeunload', () => {
        if (pollTimer) {
          clearInterval(pollTimer);
          pollTimer = null;
        }
      });
    }
  }

  return {
    init,
    publish,
    canInteract,
    getHostInfo
  };
}
