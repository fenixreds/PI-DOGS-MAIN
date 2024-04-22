import './card.styles.css';

function Card({dog}){

    const {reference_image_id,name,weight,temperament}=dog;

    //const linkImage="https://cdn2.thedogapi.com/images/"+reference_image_id+".jpg";
    // console.log(name);
    // console.log(reference_image_id);
    // console.log(linkImage);
    return(
        <div className='card-container'>

            <img className='image-container' src={reference_image_id} alt=''/>
            <p></p>
            <p>{name}</p>
            <p>{weight}</p>
            <p>{temperament}</p>

        </div>
    )
}

export default Card;