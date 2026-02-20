/* ===================================
   Party Games Hub – Global State
   Manages localStorage persistence
   =================================== */

const STATE_KEYS = {
  PARTY_TITLE: 'pgh_partyTitle',
  PARTICIPANTS: 'pgh_participants'
};

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
