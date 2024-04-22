import './card.styles.css';
import {Link} from "react-router-dom";

function Card({dog}){

    const {id,reference_image_id,name,weight,temperament}=dog;

    return(
        <div className='card-container'>

            
            <Link to={`/detail/${id}`}>
            <img className='image-container' src={reference_image_id} alt=''/>
            <p>{name}</p>
            <p>{temperament}</p>
            <p>{weight}</p>

            </Link>

        </div>
    )
}

export default Card;