import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from 'axios'


const EditPet = (props) => {
    const history = useHistory()
    const { id } = useParams();
    const [petInfo, setPetInfo] = useState({ 
        name: "",
        type:"",
        description:"",
        skillOne:'',
        skillTwo:'',
        skillThree:'' 
    });
    const [formErrors, setFormErrors] = useState({ 
    name: "",
    type:"",
    description:"",
    skillOne:'',
    skillTwo:'',
    skillThree:''})

    // Get the Pet to edit from db 
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(response => {
                console.log("response from getting pet to edit-->", response)
                setPetInfo(response.data.results)


            })
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        console.log("editing our pet!")
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }


    const submitHandler = (e) => {
        console.log("submitting the form")
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/${id}`, petInfo)
            .then(response => {
                console.log("response from the put request", response)
                if(response.data.err)
                {
                    setFormErrors(response.data.err.errors)
                }else
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Edit {petInfo.name}</h2>
            
            <form onSubmit={submitHandler} className="container mt-5">
                <div className="">
                    <label htmlFor="petInfo" className="col-form-label">Pet Name:</label>
                    <input onChange={changeHandler} type="text" name="name" className="form-control" value={petInfo.name}></input>
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>
                <div className="">
                    <label htmlFor="petInfo" className="col-form-label">Pet Type:</label>
                    <input onChange={changeHandler} type="text" name="type" className="form-control" value={petInfo.type}></input>
                    <p className="text-danger">{formErrors.type?.message}</p>
                </div>
                <div className="">
                    <label htmlFor="petInfo" className="col-form-label">Pet Description:</label>
                    <input onChange={changeHandler} type="text" name="description" className="form-control" value={petInfo.description}></input>
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <div className="">
                    <label htmlFor="petInfo" className="col-form-label">Pet Skills:</label>
                    <input onChange={changeHandler} type="text" name="skillOne" className="form-control" value={petInfo.skillOne}></input>
                    <input onChange={changeHandler} type="text" name="skillTwo" className="form-control" value={petInfo.skillTwo}></input>
                    <input onChange={changeHandler} type="text" name="skillThree" className="form-control" value={petInfo.skillThree}></input>
                </div>
                    <button className="btn btn-primary mt-3" type="submit" >Add Pet!</button>
            </form>

        </div>
    );
};

export default EditPet;