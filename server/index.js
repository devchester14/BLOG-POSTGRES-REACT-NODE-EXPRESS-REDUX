require('dotenv').config();
const express = require('express');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('BACKEND RUNNIGN');
});

//Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/admins', require('./routes/api/admins'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}`);
});
