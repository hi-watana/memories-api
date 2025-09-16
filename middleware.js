
function accessControl(req, res, next) {
  const expectedApiKey = process.env.MEMORIES_API_KEY;
  const providedApiKey = req.headers['x-api-key'];

  if (!expectedApiKey) {
    console.error('Security Alert: MEMORIES_API_KEY is not set. The application will not function correctly without it.');
    return res.status(500).send('Internal Server Error');
  }

  if (providedApiKey && providedApiKey === expectedApiKey) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

module.exports = accessControl;
