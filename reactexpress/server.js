const express = require('express');

const app = express();


app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, userName: 'kelly' },
        { id: 2, userName: 'drew' },
        { id: 3, userName: 'caitlin' }
    ];
    res.json(users);
});
// req = request and res = response
// hardcoding an array of objects to be fetched by the get request to check that our front end and back end are connected  -> will change this to database connection later on

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
