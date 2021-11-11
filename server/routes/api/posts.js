const express = require('express');

const { Router } = require('express');

const router = Router();

const pool = require('../../db');

//#ROUTE POST api/posts
//Create Post
//Access ADMIN

router.post('/', async (req, res) => {
	const {
		id,
		user_id,
		title,
		content,
		tags,
		poststatus,
		created_time,
		updated_time,
	} = req.body;
	try {
		console.log('POSTCREATED');
		const newpost = await pool.query(
			'INSERT INTO tbl_post (id, user_id, title, content, tags, poststatus,created_time,updated_time) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
			[
				id,
				user_id,
				title,
				content,
				tags,
				poststatus,
				created_time,
				updated_time,
			],
		);
		res.json(newpost);
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = router;
