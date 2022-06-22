const PetController = require("../controllers/pet.controller");

module.exports = (app) => {

    // hello world
    app.get("/", PetController.helloworld)
    //create
    app.post("/api/pets/add", PetController.createPet)
    //readone
    app.get("/api/pets/:id", PetController.findOnePet)
    //readall
    app.get("/api/pets", PetController.findAllPets)
    //update
    app.put("/api/pets/:id", PetController.updateOnePet)
    //delete
    app.delete("/api/pets/:id/delete", PetController.deleteOnePet)
}