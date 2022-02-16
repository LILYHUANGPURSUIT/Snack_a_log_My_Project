import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import HeartHealth from "./HeartHealth";

const SnackDetails = () =>{
    const [snack, setSnack] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;
    
    useEffect(()=> {
        axios.get(`${API}/snacks/${id}`)
        .then(res => setSnack(res.data.payload))
        .catch(err => console.log(err));
    },[id, API])

    const handleDelete =()=> {
        axios.delete(`${API}/snacks/${id}`)
        .then(res => navigate("/snacks"))
        .catch(err => console.log(err));
    }

    return (
        <article className="showSnackDetails">
            <aside className="snackHealth">
                <h4>the snack health</h4>
                <HeartHealth />
            </aside>
            
            
                <div className="snackDetails">
                    <h5>{snack.name}</h5>
                    <img src={snack.image} alt={snack.name}/> 
                    <h6>Protein: {snack.protein}</h6>
                    <h6>Fiber: {snack.fiber}</h6>
                    <h6>Added Sugar: {snack.added_sugar}</h6>
                </div>

                <div className="showNavigation">
                    <Link to="/snacks"><button>Back</button ></Link>
                    <Link to={`/snacks/${id}/edit`}><button>Edit</button></Link>
                    <div><button onClick={handleDelete}>Delete</button></div>
                </div>
 
            
        </article>
    )
}
    


export default SnackDetails;