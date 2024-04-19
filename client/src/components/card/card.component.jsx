import './card.styles.css';

function Card({dog}){

    const {reference_image_id,name,weight}=dog;

    const linkImage="https://cdn2.thedogapi.com/images/"+reference_image_id+".jpg";
    // console.log(name);
    // console.log(reference_image_id);
    // console.log(linkImage);
    return(
        <div className='card-container'>

            <img className='image-container' src={linkImage} alt=''/>
            <p></p>
            <p>{name}</p>
            <p>{weight}</p>
            <p></p>

        </div>
    )
}

export default Card;