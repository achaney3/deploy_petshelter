const mongoose  = require("mongoose");

const PetsDB = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"A pet name is required"],
        minlength: [3, "Pet's name must be at least 3 characters"] 
    },
    type:{
        type: String,
        required:[true,"A pet species is required"],
        minlength: [3, "Species must be at least 3 characters"] 
    },
    description:{
        type: String,
        required:[true,"A description is required"],
        minlength: [3, "The description must be at least 3 characters"] 
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }
})

const Pet = mongoose.model("Pet", PetsDB);
module.exports = Pet;