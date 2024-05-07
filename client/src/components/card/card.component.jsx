import './card.styles.css';
import {Link} from "react-router-dom";

function Card({dog}){

    const {id,reference_image_id,name,weight,temperament}=dog;

    return(
        <div className='card-container'>

            
            <Link to={`/detail/${id}`} className="card-text">
            <img className='image-container' src={reference_image_id} alt=''/>
            <p>Nombre: {name}</p>
            <p>Temperamentos: {temperament}</p>
            <p>Peso: {weight} Kg.</p>

            </Link>

        </div>
    )
}

export default Card;