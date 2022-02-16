import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const NewSnack = () =>{
    const navigate = useNavigate();
    const [snack, setSnack] = useState({
        name: "",
        fiber: 0,
        protein: 0,
        added_sugar: 0,
        image: ""
    })

    const handleTextChange =(event)=> {
        setSnack({
            ...snack, [event.target.id]: event.target.value
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post(`${API}/snacks`, snack)
        .then(()=> navigate("/snacks"))
        .catch(err =>console.log(err))
    }


    return (
        <form onSubmit={handleSubmit} className="newForm">
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={snack.name} onChange={handleTextChange} placeholder="Name required" required/>
            </div>

            <div>
                <label htmlFor="image">Image: </label>
                <input type="text" id="image" value={snack.image} onChange={handleTextChange} placeholder="Please enter image url"/>
            </div>

            <div>
                <label htmlFor="fiber">Fiber: </label>
                <input type="number" id="fiber" value={snack.fiber} onChange={handleTextChange} placeholder="Please enter fiber"/>
            </div>

            <div>
                <label htmlFor="protein">Protein: </label>
                <input type="number" id="protein" value={snack.protein} onChange={handleTextChange} placeholder="Please enter protein"/>
            </div>

            <div>
                <label htmlFor="added_sugar">Added sugar: </label>
                <input type="number" id="added_sugar" value={snack.added_sugar} onChange={handleTextChange} placeholder="Please enter added sugar"/>
            </div>

            <div>
                <label htmlFor="submit">Submit: </label>
                <input type="submit" id="submit"/>
            </div>
        </form>
    )
}

export default NewSnack;