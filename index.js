const express = require('express');
const app = express();

const pets = [
    {
        id: 1,
        category: {
            id: 1,
            name: 'Category 1'
        },
        name: 'pet 1',
        photoUrls: ['n/a'],
        tags: ['tag1', 'tag2'],
        status: 'available'
    },
    {
        id: 2,
        category: {
            id: 1,
            name: 'Category 1'
        },
        name: 'pet 2',
        photoUrls: ['n/a'],
        tags: ['tag1', 'tag2'],
        status: 'pending'
    },
    {
        id: 3,
        category: {
            id: 1,
            name: 'Category 1'
        },
        name: 'pet 3',
        photoUrls: ['n/a'],
        tags: ['tag1', 'tag2'],
        status: 'sold'
    }
];

app.get('/pet/findByStatus', (req, res) => {
    const status = req.query.status;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(pets));
});

app.listen(3000, () => console.log('Pet store listening on port 3000!'));
