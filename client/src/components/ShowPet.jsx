import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";



const ShowPet = (props) => {
   const [likes,setLikes] = useState(0);
    const { id } = useParams();
    const history = useHistory();
    const [petData, setPetData] = useState({})
    const [disable, setDisable] = React.useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((response) => setPetData(response.data.results))
            .catch((err) => console.log("error----->", err))
    }, [id])


    const deletePet = () => {
        console.log("deleting pet that has this is-->", id)
        axios.delete(`http://localhost:8000/api/pets/${id}/delete`) //make an axios call to our backend route to delete pet by id. wehave this id available from the route parameter
            .then(response => {
                console.log("response after deleting->", response)
                history.push("/") //redirect to "/" after deleting the pet

            })
            .catch(err => console.log(err))
    }

    const likeHandler = () => {
        setLikes(likes +1);
        setDisable(true)
    }

        return (

            <div>
                <h2>Details about: {petData.name}</h2>
                <button onClick={deletePet} className="float-end btn-danger">Adopt {petData.name}</button> <br /><br />

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Pet Name: {petData.name}</h5>
                        <p class="card-text">
                            <p>Pet Type: {petData.type} </p>
                            <p>Pet Description: {petData.description}</p>
                            <p>Skills: {petData.skillOne}</p>
                            <p>{petData.skillTwo}</p>
                            <p>{petData.skillThree}</p>
                        </p>
                        <button onClick={likeHandler} disabled={disable} class="btn btn-success">Like {petData.name}</button><p> {likes} like(s)</p>
                    </div>
                </div>
            </div>
        );
    
};



export default ShowPet;