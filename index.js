const express = require('express')
const app = express();
const cors = require('cors');


app.use(cors());

const categories = require('./data/category.json');
const course = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('news server is running');
})

app.get('/categories', (req, res) => {
    res.send(categories);
})
app.get('/course', (req, res) => {
    res.send(course);
})
app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(
        (c) => c.course_id === id
    );
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log("News are coming from ", port);
})