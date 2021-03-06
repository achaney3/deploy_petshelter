import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";


const AuthorList = (props) => {

    const [allPets, setAllPets] = useState([])
    const [deleteToggle, setDeleteToggle] = useState(false)


    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets') 
        .then((response) => setAllPets(response.data.results) )
        .catch((err) => console.log("errrrrr->", err))
    },[deleteToggle])

    const deleteAuthor = (id)=>{
        console.log("deleting the pet-->", id)
        axios.delete(`http://localhost:8000/api/pets/${id}/delete`)
            .then(response=>{
                console.log("response after deleting->",response)

                setDeleteToggle(!deleteToggle) 
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <div className="container">
                <br />
                    <h2>These pets are looking for a good home</h2>
                    <br />
                <table className="table">
                    <thead className="table-info">
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        allPets && allPets.map((pet, idx) => {
                            return(
                                <tr key = {idx}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                    <Link to = {`/pets/${pet._id}`}> Details</Link> | <Link to = {`/pets/${pet._id}/edit`}>Edit</Link>
                                        </td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AuthorList;

// <button onClick= {(e)=>deleteAuthor(pet._id)} className="btn btn-danger">Delete</button>