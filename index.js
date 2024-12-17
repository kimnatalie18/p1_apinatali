const express = require('express');
const app = express();
const port = 3000;
const bodyparser = require('body-parser');


app.get('/', (req, res) => {
    res.send('hallo natalie');
})

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// import route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

// ini untuk akses halaman website 
app.listen(port, () => {
    console.log(`this application running in http://localhost:${port}`);
});