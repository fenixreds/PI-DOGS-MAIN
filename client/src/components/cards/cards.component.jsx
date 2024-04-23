import Card from "../card/card.component";
import './cards.styles.css';

function Cards({renderDogs}){

    const dogsList=renderDogs;

    return(
        <div className="cards-list">
            {dogsList?.map(dog=>
            <Card
            key={dog.id} 
            dog={dog}/>)}
            
            
        </div>
    )
}

export default Cards;