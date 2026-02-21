const { createUniqueRoom } = require('./_storage');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const room = await createUniqueRoom();
    return res.status(200).json({ roomId: room.roomId });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Failed to create room' });
  }
};
