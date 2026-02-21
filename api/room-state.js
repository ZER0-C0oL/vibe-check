const { getRoom } = require('./_storage');

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const roomId = String(req.query?.roomId || '').trim().toUpperCase();
    if (!roomId) return res.status(400).json({ error: 'roomId is required' });

    const room = await getRoom(roomId);
    if (!room) return res.status(404).json({ error: 'Room not found or expired' });

    return res.status(200).json({
      roomId: room.roomId,
      createdAt: room.createdAt,
      updatedAt: room.updatedAt,
      hostId: room.hostId,
      players: room.players,
      game: room.game,
      votes: room.votes,
      phase: room.phase,
      currentGame: room.currentGame,
      currentPrompt: room.currentPrompt
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Failed to fetch room state' });
  }
};
