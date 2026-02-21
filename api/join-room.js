const { addPlayer } = require('./_storage');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const roomId = String(req.body?.roomId || '').trim().toUpperCase();
    const playerName = String(req.body?.playerName || '').trim();

    if (!roomId) return res.status(400).json({ error: 'roomId is required' });
    if (!playerName) return res.status(400).json({ error: 'playerName is required' });

    const result = await addPlayer(roomId, playerName);
    if (!result) return res.status(404).json({ error: 'Room not found or expired' });

    return res.status(200).json({ playerId: result.playerId });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Failed to join room' });
  }
};
