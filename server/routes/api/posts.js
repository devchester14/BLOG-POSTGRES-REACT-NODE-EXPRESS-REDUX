const express = require('express');

const { Router } = require('express');

const {
	validateToken,
	validateUserToken,
} = require('../../middlewares/AuthMiddleware');

const router = Router();

const pool = require('../../db');

//#ROUTE POST api/posts
//Create Post
//Access ADMIN

router.post('/', validateToken, async (req, res) => {
	const { title, content, tags, poststatus } = req.body;
	const user_id = req.user.userid;
	const author = req.user.username;
	try {
		console.log('POSTCREATED');
		const newpost = await pool.query(
			'INSERT INTO tbl_post ( user_id, title, content, tags, poststatus,created_at) VALUES ($1,$2,$3,$4,$5,NOW())',
			[user_id, title, content, tags, poststatus],
		);
		res.json(newpost);
	} catch (err) {
		console.error(err.message);
	}
});

//#ROUTE GET api/posts
//GET all posts
//ACCESS PUBLIC
router.get('/', async (req, res) => {
	try {
		const all_post = await pool.query(
			'SELECT * FROM tbl_post ORDER BY postid DESC',
		);
		if (!all_post.rows.length == 0) {
			res.json(all_post.rows);
		} else {
			res.json('no posts');
		}
	} catch (err) {
		console.error(err.message);
	}
});

//#ROUTE GET api/posts/:id
//get post by id
//ACCESS PUBLIC
router.get('/:postid', async (req, res) => {
	const { postid } = req.params;
	try {
		const selectedpost = await pool.query(
			'SELECT * FROM tbl_post WHERE postid=$1',
			[postid],
		);
		console.log('length', selectedpost.rows.length);
		//res.json(selectedpost.rows.length);

		if (!selectedpost.rows.length) {
			res.json('post does not exist!!');
		} else {
			res.json(selectedpost.rows);
		}
	} catch (err) {
		console.error(err.message);
	}
});

//#ROUTE PUT api/posts/:id
//edit post
//ACCESS ADMIN

router.put('/:postid', validateToken, async (req, res) => {
	const { postid } = req.params;
	const { title, content } = req.body;
	try {
		console.log('updating post');
		const editedpost = await pool.query(
			`UPDATE tbl_post SET title=$1, content=$2, updated_at=NOW() WHERE postid=$3`,
			[title, content, postid],
		);
		res.json('POST UPDaTED');
	} catch (err) {
		console.error(err.message);
	}
});

//ROUTE DELETE api/:id
//delete post
//ACCESS ADMIN
router.delete('/:postid', validateToken, async (req, res) => {
	const { postid } = req.params;
	try {
		console.log('deleting post');
		const deletedpost = await pool.query(
			`DELETE FROM tbl_post  WHERE postid=$1`,
			[postid],
		);
		res.json('POST Deleted!!');
	} catch (err) {
		console.error(err.message);
	}
});

//ROUTE POST api/posts/:id/comments
//post comment
//ACCESS AUth users
router.post('/:postid/comments', validateUserToken, async (req, res) => {
	const { postid } = req.params;

	const { content, comment_status } = req.body;
	const user_id = req.user.userid;
	const author = req.user.username;
	try {
		console.log('creating comment');
		const comment = pool.query(
			`INSERT INTO tbl_comment (content,user_id,author,post_id,comment_status,created_at) VALUES ($1,$2,$3,$4,$5,NOW())`,
			[content, user_id, author, postid, comment_status],
		);
		res.json(comment.rows);
	} catch (err) {
		console.error(err.message);
	}
});

//ROUTE geT api/posts/:id/comments
//GET comment
//ACCESS AUth users
router.get('/:postid/comments', async (req, res) => {
	const { postid } = req.params;

	try {
		console.log('fetching comment');
		const comment = await pool.query(
			'SELECT * FROM tbl_comment WHERE post_id =$1',
			[postid],
		);
		console.log(comment.rows);
		res.json(comment);
	} catch (err) {
		console.error(err.message);
	}
});

//ROUTE PUT api/:id/comments/:id
//approve comment
//ACCESS ADMIN
router.put('/:post_id/comments/:comment_id', validateToken, (req, res) => {
	const { post_id, comment_id } = req.params;
	const { comment_status } = req.body;
	try {
		const approvecomment = pool.query(
			`UPDATE tbl_comment 
	SET comment_status=$1 where post_id=$2, comment_id=$3
	 RETURNING *`,
			[comment_status, post_id, comment_id],
		);
		res.json(approvecomment);
	} catch (err) {
		console.error(message);
	}
});

//ROUTE DELETE api/:id/comments/:id
//DELETE COMMENT
//AcCESS ADMIN

router.delete(
	'/:post_id/comments/:comment_id',
	[validateUserToken, validateToken],
	async (req, res) => {
		const { post_id, comment_id } = req.params;
		try {
			console.log('deleting post');
			const deleteComment = await pool.query(
				`DELETE FROM tbl_comment  WHERE  commentid=$1`,
				[comment_id],
			);
			res.json('Comment Deleted!!');
		} catch (err) {
			console.error(message);
		}
	},
);

module.exports = router;
