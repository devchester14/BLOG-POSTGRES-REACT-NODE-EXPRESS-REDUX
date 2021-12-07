const express = require('express');
const { check, validationResult } = require('express-validator');
const { Router } = require('express');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validateToken } = require('../../middlewares/AuthMiddleware');
const { sign } = require('jsonwebtoken');

const router = Router();

const pool = require('../../db');

//Register Admin

//RegisterAdmin
//Access Public
router.post(
	'/',
	check('username', 'Name is required').notEmpty(),
	check('email', 'Please include a valid email').isEmail(),
	check(
		'password',
		'Please eneter a password with 6 or more characters',
	).isLength({
		min: 6,
	}),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const saltRounds = 10;
		const { username, email, password } = req.body;

		try {
			let check1 = await pool.query(`SELECT * FROM tbl_users WHERE email=$1;`, [
				email,
			]);
			const arr1 = check1.rows;
			if (arr1.length != 0) {
				return res.status(400).json({
					error: 'Only one account per Email Id',
				});
			}

			let check2 = await pool.query(
				`SELECT * FROM tbl_users WHERE username=$1`,
				[username],
			);
			const arr2 = check2.rows;
			if (arr2.length != 0) {
				return res.status(400).json({
					error: 'Username Already Exists!!',
				});
			}
			const usertype = 'Admin';
			const hashedPassword = await bcrypt.hash(password, saltRounds);
			const user = pool.query(
				'INSERT INTO tbl_users (username,password,email,usertype) VALUES($1,$2,$3,$4)',
				[username, hashedPassword, email, usertype],
			);
			const payload = {
				user: {
					id: user.id,
				},
			};
			const accessToken = sign(
				{
					payload,
					userid: user.rows[0].userid,
					username: user.rows[0].username,
					email: user.rows[0].email,
				},
				'SecretKey',
				(err, accessToken) => {
					if (err) throw err;
					res.json({ accessToken });
				},
			);
			res.json(accessToken);
			res.json({ message: 'ADMIN CREATED' });
		} catch (err) {
			console.error(err.message);
		}
	},
);

//get all registered admins
router.get('/', async (req, res) => {
	try {
		const usertype = 'Admin';
		const all_post = await pool.query(
			'SELECT * FROM tbl_users WHERE usertype = $1',
			[usertype],
		);
		res.json(all_post.rows);
	} catch (err) {
		console.error(err.message);
	}
});

//Admin Login
router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await pool.query('SELECT * FROM tbl_users WHERE email=$1 ', [
			email,
		]);
		const hashedPassword = await bcrypt.compareSync(
			password,
			user.rows[0].password,
		);
		if (hashedPassword === false) {
			res.json({ message: 'Invalid Credentials' });
		} else {
			const accessToken = sign(
				{
					userid: user.rows[0].userid,
					username: user.rows[0].username,
					email: user.rows[0].email,
				},
				'SecretKey',
				(err, accessToken) => {
					if (err) throw err;
					res.json({ accessToken });
				},
			);
			res.json(accessToken);
			console.log('Logged In');
		}
	} catch (err) {
		res.send(err.message);
		console.error(err.message);
	}
});

//auth
router.get('/auth', validateToken, (req, res) => {
	res.json(req.user);
});

module.exports = router;
