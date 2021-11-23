const express = require('express');
const { check, validationResult } = require('express-validator');
const { Router } = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = Router();

const pool = require('../../db');

//#ROUTE POST api/users
//Register user
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
		const { username, password, email, usertype } = req.body;
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
			bcrypt.hash(password, saltRounds, (err, hash) => {
				if (err) {
					console.log(err);
				}
				const newuser = pool.query(
					'INSERT INTO tbl_users (username,password,email,usertype) VALUES($1,$2,$3,$4)',
					[username, password, email, hash],
				);
			});

			res.json(newuser);
		} catch (err) {
			console.error(err.message);
		}
	},
);

//Get all users
router.get('/', async (req, res) => {
	try {
		const all_post = await pool.query('SELECT * FROM tbl_user ');
		res.json(all_post.rows);
	} catch (err) {
		console.error(err.message);
	}
});

//
router.post('/login', async (req, res) => {
	const { email, password } = req.body;
	try {
		const loggedInUser = await pool.query(
			'SELECT * FROM tbl_users WHERE email=$1 AND password=$2',
			[email, password],
		);
		if (loggedInUser.rows.length > 0) {
			res.json(loggedInUser.rows);
		} else {
			console.error('wrong credentials');
		}
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = router;
