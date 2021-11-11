const express = require('express');
const { check, validationResult } = require('express-validator');
const { Router } = require('express');

const router = Router();

const pool = require('../../db');

//#ROUTE POST api/users
//Register user
//Access Public

router.post(
	'/',
	check('username', 'Name is required').notEmpty(),
	check('email', 'Please include a valid email').isEmail(),
	check('pass', 'Please eneter a password with 6 or more characters').isLength({
		min: 6,
	}),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { id, username, pass, email, usertype } = req.body;
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

			const newuser = await pool.query(
				'INSERT INTO tbl_users (id,username,pass,email,usertype) VALUES($1,$2,$3,$4,$5)',
				[id, username, pass, email, usertype],
			);

			res.json(newuser);
		} catch (err) {
			console.error(err.message);
		}
	},
);

module.exports = router;
