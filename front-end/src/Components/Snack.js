import HeartHealth from "./HeartHealth.js";
import {Link} from "react-router-dom"

const Snack = ({snack}) =>{

    return (
        <div className="Snack">
            <img src={snack.image} alt={snack.name}/>
            <Link to={`/snacks/${snack.id}`} >
                <h4>{snack.name} <HeartHealth snackHealth={snack.is_healthy}/></h4>
                
            </Link>
        </div>
    )
}

export default Snack;

