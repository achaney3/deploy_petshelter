const Pet = require("../models/pet.model")

module.exports.helloworld = (req,res)=> {
    res.json({msg: "Fullstack Pet Controller!"});
}
//create
module.exports.createPet = (req,res)=>{
    Pet.create(req.body)
        .then(addingNewPet =>{
            res.json({results: addingNewPet })
        })
        .catch(err=>res.json({err:err}))
}

//update
module.exports.updateOnePet = (req,res)=>{
    Pet.findOneAndUpdate(
        {_id:req.params.id },
        req.body,
        {new:true, 
        runValidators:true}
        )
    .then(updatedPet =>{
        res.json({results: updatedPet })
    })
    .catch(err=>res.json({err:err}))
}
//read one
module.exports.findOnePet = (req,res)=>{
    Pet.findOne({_id:req.params.id })
        .then(foundPet =>{
            res.json({results: foundPet })
        })
        .catch(err=>res.json({err:err}))
}

//read all
module.exports.findAllPets = (req,res)=>{
    Pet.find()
        .then(allPets =>{
            res.json({results: allPets })
        })
        .catch(err=>res.json({err:err}))
}

//delete
module.exports.deleteOnePet = (req,res)=>{
    Pet.deleteOne({_id:req.params.id })
        .then(deletedPet =>{
            res.json({results: deletedPet })
        })
        .catch(err=>res.json({err:err}))
}