const { patchRoom } = require('./_storage');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const roomId = String(req.body?.roomId || '').trim().toUpperCase();
    const patch = req.body?.patch || {};

    if (!roomId) return res.status(400).json({ error: 'roomId is required' });
    if (typeof patch !== 'object' || Array.isArray(patch)) {
      return res.status(400).json({ error: 'patch must be an object' });
    }

    const room = await patchRoom(roomId, patch);
    if (!room) return res.status(404).json({ error: 'Room not found or expired' });

    return res.status(200).json({ ok: true, room });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Failed to update room state' });
  }
};
