module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const hasVercelKv = Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
  const hasUpstash = Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);

  let storage = 'memory';
  if (hasVercelKv) storage = 'vercel_kv';
  else if (hasUpstash) storage = 'upstash';

  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || '';
  const temporaryUrl = host ? `${proto}://${host}/api/health` : '';

  return res.status(200).json({
    ok: true,
    storage,
    temporaryUrl
  });
};
