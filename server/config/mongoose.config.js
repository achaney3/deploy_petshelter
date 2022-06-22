const mongoose = require("mongoose");

//dont forget to change the db name!
mongoose.connect('mongodb://localhost/petShelter_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// since this is a callback we need the promise below
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));