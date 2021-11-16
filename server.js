const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const cors = require("cors");

// allows us to send and parse json properly
require("./server/config/mongoose.config");
app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));



require("./server/routes/pet.routes")(app);



app.listen(port, () => console.log(`Listening on port: ${port}!`) );
