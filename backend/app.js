const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const journalController = require('/controllers/journalcontroller.js');
const { response } = require('express');
app.use('/journal', journalController);

app.get('/', (request, response) => {
    response.send('Welcome to Your Personal Journal')
})

app.get('*',(request, response)=>{
    response.status(404).send('Page not found - this is from App.js line 17.' )
})

module.exports = app;
