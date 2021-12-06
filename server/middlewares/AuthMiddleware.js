const { verify } = require('jsonwebtoken');

//For Admin
const validateToken = (req, res, next) => {
	const accessToken = req.header('accessToken');

	if (!accessToken) return res.json({ error: 'Admin not logged in!' });

	try {
		const validToken = verify(accessToken, 'SecretKey');
		req.user = validToken;

		if (validToken) {
			return next();
		}
	} catch (err) {
		return res.json({ error: err });
	}
};

//For Users
const validateUserToken = (req, res, next) => {
	const accessToken = req.header('accessToken');

	if (!accessToken) return res.json({ error: 'Admin not logged in!' });

	try {
		const validToken = verify(accessToken, 'SecretKey');
		req.user = validToken;

		if (validToken) {
			return next();
		}
	} catch (err) {
		return res.json({ error: err });
	}
};

module.exports = { validateToken, validateUserToken };
