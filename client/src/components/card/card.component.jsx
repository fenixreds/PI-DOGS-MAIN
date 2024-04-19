import './card.styles.css';

function Card({dog}){

    const {reference_image_id,name,weight}=dog;
    return(
        <div className='card-container'> 
            <p>{reference_image_id}</p>
            <p>{name}</p>
            <p>{weight}</p>
            <p></p>

        </div>
    )
}

export default Card;