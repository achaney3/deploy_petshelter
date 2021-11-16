import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const NewPet = (props) => {

    const history = useHistory()
    const [petInfo, setPetInfo] = useState({ name: "" })
    const [formErrors, setFormErrors] = useState({ name: "" })

    const changeHandler = (e) => {
        console.log("triggering changehandler")
        setPetInfo({
            ...petInfo,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("trying to submit form!")
        axios.post("http://localhost:8000/api/pets/add", petInfo)
            .then(response => {
                console.log("post response =====>", response);
                if (response.data.err) { //if the form is not filled out properly and there are validation errors, collecct the validations errors and put them in a state variable using setFormErrors
                    setFormErrors(response.data.err.errors)
                }
                else {
                    setPetInfo("")
                    setFormErrors("")
                    history.push("/")
                }
            })
            .catch(err => console.log("error submitting the post request-->", err))


    }


    return (
        <div>
            <h2>Know a Pet needing a Home?</h2>
            <form onSubmit={submitHandler} className="container mt-5">
                <div className="">
                    <label htmlFor="petInfo" className="col-form-label">Pet Name:</label>
                    <input onChange={changeHandler} type="text" name="name" className="form-control"></input>
                    <p className="text-danger">{formErrors.name?.message}</p>
                </div>
                <div className="">
                    <label htmlFor="petInfo" className="col-form-label">Pet Type:</label>
                    <input onChange={changeHandler} type="text" name="type" className="form-control"></input>
                    <p className="text-danger">{formErrors.type?.message}</p>
                </div>
                <div className="">
                    <label htmlFor="petInfo" className="col-form-label">Pet Description:</label>
                    <input onChange={changeHandler} type="text" name="description" className="form-control"></input>
                    <p className="text-danger">{formErrors.description?.message}</p>
                </div>
                <div className="">
                    <label htmlFor="petInfo" className="col-form-label">Pet Skills:</label>
                    <input onChange={changeHandler} type="text" name="skillOne" className="form-control"></input>
                    <input onChange={changeHandler} type="text" name="skillTwo" className="form-control"></input>
                    <input onChange={changeHandler} type="text" name="skillThree" className="form-control"></input>
                </div>
                    <button className="btn btn-primary mt-3" type="submit" >Add Pet!</button>
            </form>
        </div>
    );
};



export default NewPet;