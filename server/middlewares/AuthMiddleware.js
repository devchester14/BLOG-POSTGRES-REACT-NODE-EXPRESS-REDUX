const { verify } = require('jsonwebtoken');

//For Admin
const validateToken = (req, res, next) => {
	const token = req.header('x-auth-token');

	if (!token) {
		return res.json({ error: 'Admin not logged in!' });
	}

	try {
		const validToken = jwt.verify(token, 'SecretKey');
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
	const token = req.header('x-auth-token');

	if (!token) return res.json({ error: 'User not logged in!' });

	try {
		const validToken = verify(token, 'SecretKey');
		req.user = validToken;

		if (validToken) {
			return next();
		}
	} catch (err) {
		return res.json({ error: err });
	}
};

module.exports = { validateToken, validateUserToken };
