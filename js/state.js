/* ===================================
   Party Games Hub – Global State
   Manages localStorage persistence
   =================================== */

const STATE_KEYS = {
  PARTY_TITLE: 'pgh_partyTitle',
  PARTICIPANTS: 'pgh_participants',
  PLAY_MODE: 'pgh_playMode',
  ROOM_ID: 'pgh_roomId',
  PLAYER_ID: 'pgh_playerId',
  PLAYER_NAME: 'pgh_playerName'
};

const DEFAULT_PLAY_MODE = 'single';

/**
 * Get the party title from localStorage.
 * @returns {string}
 */
function getPartyTitle() {
  const title = localStorage.getItem(STATE_KEYS.PARTY_TITLE);
  return title || "Let's Party 🎉";
}

/**
 * Set the party title in localStorage.
 * @param {string} title
 */
function setPartyTitle(title) {
  localStorage.setItem(STATE_KEYS.PARTY_TITLE, title);
}

/**
 * Get selected play mode.
 * @returns {'single'|'room'}
 */
function getPlayMode() {
  const mode = localStorage.getItem(STATE_KEYS.PLAY_MODE);
  return mode === 'room' ? 'room' : DEFAULT_PLAY_MODE;
}

/**
 * Set selected play mode.
 * @param {'single'|'room'} mode
 */
function setPlayMode(mode) {
  localStorage.setItem(STATE_KEYS.PLAY_MODE, mode === 'room' ? 'room' : 'single');
}

/**
 * @returns {boolean}
 */
function isRoomMode() {
  return getPlayMode() === 'room';
}

/**
 * Get participants list from localStorage.
 * @returns {Array<{name: string, gender: string}>}
 */
function getParticipants() {
  const data = localStorage.getItem(STATE_KEYS.PARTICIPANTS);
  try {
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Set participants list in localStorage.
 * @param {Array<{name: string, gender: string}>} list
 */
function setParticipants(list) {
  localStorage.setItem(STATE_KEYS.PARTICIPANTS, JSON.stringify(list));
}

/**
 * Replace local participants from backend room players.
 * Used in Room Mode so existing games can still read getParticipants().
 * @param {Array<{id: string, name: string}>} players
 */
function setParticipantsFromRoom(players) {
  const mapped = (players || []).map(p => ({
    name: p.name,
    gender: 'Other',
    id: p.id
  }));
  setParticipants(mapped);
}

/**
 * Add a single participant.
 * @param {{name: string, gender: string}} participant
 */
function addParticipant(participant) {
  const list = getParticipants();
  list.push(participant);
  setParticipants(list);
}

/**
 * Remove participant by index.
 * @param {number} index
 */
function removeParticipant(index) {
  const list = getParticipants();
  list.splice(index, 1);
  setParticipants(list);
}

/**
 * Save current room session context.
 * @param {{roomId: string, playerId: string, playerName: string}} session
 */
function setRoomSession(session) {
  localStorage.setItem(STATE_KEYS.ROOM_ID, session.roomId);
  localStorage.setItem(STATE_KEYS.PLAYER_ID, session.playerId);
  localStorage.setItem(STATE_KEYS.PLAYER_NAME, session.playerName);
}

/**
 * Get room session context.
 * @returns {{roomId: string, playerId: string, playerName: string}}
 */
function getRoomSession() {
  return {
    roomId: localStorage.getItem(STATE_KEYS.ROOM_ID) || '',
    playerId: localStorage.getItem(STATE_KEYS.PLAYER_ID) || '',
    playerName: localStorage.getItem(STATE_KEYS.PLAYER_NAME) || ''
  };
}

/**
 * Clear room session context.
 */
function clearRoomSession() {
  localStorage.removeItem(STATE_KEYS.ROOM_ID);
  localStorage.removeItem(STATE_KEYS.PLAYER_ID);
  localStorage.removeItem(STATE_KEYS.PLAYER_NAME);
}

/**
 * Create room via backend.
 * @returns {Promise<{roomId: string}>}
 */
async function apiCreateRoom() {
  const res = await fetch('/api/create-room', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({})
  });
  if (!res.ok) throw new Error('Failed to create room');
  return res.json();
}

/**
 * Join room via backend.
 * @param {string} roomId
 * @param {string} playerName
 * @returns {Promise<{playerId: string}>}
 */
async function apiJoinRoom(roomId, playerName) {
  const res = await fetch('/api/join-room', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomId, playerName })
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || 'Failed to join room');
  }
  return res.json();
}

/**
 * Fetch room state.
 * @param {string} roomId
 * @returns {Promise<any>}
 */
async function apiGetRoomState(roomId) {
  const res = await fetch(`/api/room-state?roomId=${encodeURIComponent(roomId)}`);
  if (!res.ok) throw new Error('Failed to fetch room state');
  return res.json();
}

/**
 * Patch room state.
 * @param {string} roomId
 * @param {Object} patch
 * @returns {Promise<any>}
 */
async function apiUpdateRoomState(roomId, patch) {
  const res = await fetch('/api/update-state', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomId, patch })
  });
  if (!res.ok) throw new Error('Failed to update room state');
  return res.json();
}

/* ---- Scorecard Persistence ---- */

const SCORECARD_KEY = 'pgh_scorecard';

/**
 * Get the full scorecard from localStorage.
 * Structure: { gameId: { playerName: cumulativeScore, ... }, ... }
 * @returns {Object}
 */
function getScorecard() {
  try {
    const data = localStorage.getItem(SCORECARD_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

/**
 * Save scores for a game round. Adds to cumulative totals.
 * @param {string} gameId - e.g. "brain", "hot-take"
 * @param {Object} roundScores - { playerName: pointsThisRound, ... }
 */
function saveGameScores(gameId, roundScores) {
  const scorecard = getScorecard();
  if (!scorecard[gameId]) scorecard[gameId] = {};
  for (const [name, pts] of Object.entries(roundScores)) {
    scorecard[gameId][name] = (scorecard[gameId][name] || 0) + pts;
  }
  localStorage.setItem(SCORECARD_KEY, JSON.stringify(scorecard));
}

/**
 * Clear the entire scorecard.
 */
function clearScorecard() {
  localStorage.removeItem(SCORECARD_KEY);
}
