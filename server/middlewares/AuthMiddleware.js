const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
	const accessToken = req.header('accessToken');

	if (!accessToken) return res.json({ error: 'User not logged in!' });

	//verify
	try {
		const validToken = verify(accessToken, 'SecretKey');
		req.user = validateToken;

		if (validToken) {
			return next();
		}
	} catch (err) {
		return res.json({ error: err });
	}
};

module.exports = { validateToken };
