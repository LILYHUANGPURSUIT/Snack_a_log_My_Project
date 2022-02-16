import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const EditSnack = () =>{
    const navigate = useNavigate();
    const {id} = useParams();
    const [snack, setSnack] = useState({
        name: "",
        fiber: 0,
        protein: 0,
        added_sugar: 0,
        image: ""
    })

    useEffect(()=>{
        axios.get(`${API}/snacks/${id}`)
        .then(res=> setSnack(res.data.payload))
        .catch(err => console.log(err));
    },[])

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.put(`${API}/snack/${id}`,snack)
        .then(()=> navigate("/snacks"))
        .catch(err =>console.log(err))
    }

    const handleTextChange =(event)=> {
        setSnack({
            ...snack, [event.target.id]: event.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit} className="editForm">
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={snack.name} onChange={handleTextChange}  required/>
            </div>

            <div>
                <label htmlFor="image">Image: </label>
                <input type="text" id="image" value={snack.image} onChange={handleTextChange} />
            </div>

            <div>
                <label htmlFor="fiber">Fiber: </label>
                <input type="number" id="fiber" value={snack.fiber} onChange={handleTextChange} />
            </div>

            <div>
                <label htmlFor="protein">Protein: </label>
                <input type="number" id="protein" value={snack.protein} onChange={handleTextChange} />
            </div>

            <div>
                <label htmlFor="added_sugar">Added sugar: </label>
                <input type="number" id="added_sugar" value={snack.added_sugar} onChange={handleTextChange} />
            </div>

            <div>
                <label htmlFor="submit">Submit: </label>
                <input type="submit" id="submit"/>
            </div>

        </form>
    )
}
export default EditSnack;