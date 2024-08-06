const express = require('express');
const app = express();

app.use(express.json())

app.get("/", async (req, res) => {
    const query = req.query.ask
    const response = await require('./src/model/nlpManager')(query)
    res.send(response)
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => { console.log("Server Listening on port 3000") })

