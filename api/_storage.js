const ROOM_PREFIX = 'room:';
const ROOM_TTL_MS = 4 * 60 * 60 * 1000;

const memoryRooms = globalThis.__pghRooms || new Map();
globalThis.__pghRooms = memoryRooms;

function hasKvConfig() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

function nowTs() {
  return Date.now();
}

async function kvGet(key) {
  const url = `${process.env.KV_REST_API_URL}/get/${encodeURIComponent(key)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` }
  });
  if (!res.ok) throw new Error('KV get failed');
  const data = await res.json();
  if (!data || data.result == null) return null;
  return JSON.parse(data.result);
}

async function kvSet(key, value) {
  const encodedValue = encodeURIComponent(JSON.stringify(value));
  const url = `${process.env.KV_REST_API_URL}/set/${encodeURIComponent(key)}/${encodedValue}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` }
  });
  if (!res.ok) throw new Error('KV set failed');
}

async function kvDel(key) {
  const url = `${process.env.KV_REST_API_URL}/del/${encodeURIComponent(key)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` }
  });
  if (!res.ok) throw new Error('KV del failed');
}

function isExpired(room) {
  const t = room?.updatedAt || room?.createdAt || 0;
  return (nowTs() - t) > ROOM_TTL_MS;
}

function normalizeRoom(roomId, room) {
  const safe = room || {};
  const players = Array.isArray(safe.players) ? safe.players : [];
  const game = safe.game || { id: '', promptIndex: 0 };
  const votes = safe.votes || {};
  const phase = safe.phase || 'lobby';
  const currentGame = safe.currentGame || game.id || '';
  const currentPrompt = safe.currentPrompt || {};

  let hostId = safe.hostId || '';
  if (!hostId && players.length > 0) hostId = players[0].id;

  return {
    roomId,
    createdAt: safe.createdAt || nowTs(),
    updatedAt: safe.updatedAt || nowTs(),
    players,
    hostId,
    game,
    votes,
    phase,
    currentGame,
    currentPrompt
  };
}

async function getRoom(roomId) {
  const key = `${ROOM_PREFIX}${roomId}`;
  const room = hasKvConfig() ? await kvGet(key) : memoryRooms.get(key) || null;
  if (!room) return null;

  if (isExpired(room)) {
    if (hasKvConfig()) await kvDel(key);
    else memoryRooms.delete(key);
    return null;
  }

  const normalized = normalizeRoom(roomId, room);
  normalized.updatedAt = nowTs();
  await setRoom(roomId, normalized);
  return normalized;
}

async function setRoom(roomId, room) {
  const key = `${ROOM_PREFIX}${roomId}`;
  const normalized = normalizeRoom(roomId, room);
  normalized.updatedAt = nowTs();

  if (hasKvConfig()) await kvSet(key, normalized);
  else memoryRooms.set(key, normalized);

  return normalized;
}

function generateRoomId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let out = '';
  for (let i = 0; i < 5; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

async function createUniqueRoom() {
  for (let i = 0; i < 20; i++) {
    const roomId = generateRoomId();
    const existing = await getRoom(roomId);
    if (!existing) {
      const room = normalizeRoom(roomId, {
        createdAt: nowTs(),
        updatedAt: nowTs(),
        players: [],
        hostId: '',
        game: { id: '', promptIndex: 0 },
        votes: {},
        phase: 'lobby',
        currentGame: '',
        currentPrompt: {}
      });
      await setRoom(roomId, room);
      return room;
    }
  }
  throw new Error('Unable to generate room code');
}

async function addPlayer(roomId, playerName) {
  const room = await getRoom(roomId);
  if (!room) return null;

  const trimmed = String(playerName || '').trim();
  if (!trimmed) throw new Error('Player name required');

  const playerId = `p${room.players.length + 1}`;
  room.players.push({ id: playerId, name: trimmed });
  if (!room.hostId) room.hostId = playerId;
  await setRoom(roomId, room);
  return { room, playerId };
}

async function patchRoom(roomId, patch) {
  const room = await getRoom(roomId);
  if (!room) return null;

  const next = {
    ...room,
    ...patch,
    game: { ...(room.game || {}), ...((patch && patch.game) || {}) },
    votes: { ...(room.votes || {}), ...((patch && patch.votes) || {}) },
    currentPrompt: { ...(room.currentPrompt || {}), ...((patch && patch.currentPrompt) || {}) }
  };

  if (!next.hostId && Array.isArray(next.players) && next.players.length > 0) {
    next.hostId = next.players[0].id;
  }

  return setRoom(roomId, next);
}

module.exports = {
  ROOM_TTL_MS,
  createUniqueRoom,
  addPlayer,
  getRoom,
  setRoom,
  patchRoom
};
