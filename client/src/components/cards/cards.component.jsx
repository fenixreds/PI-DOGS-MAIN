import Card from "../card/card.component";
import './cards.styles.css';

function Cards({allDogs}){

    const dogsList=allDogs;

    return(
        <div className="cards-list">
            {dogsList?.map(dog=>
            <Card dog={dog}/>)}
            
            
        </div>
    )
}

export default Cards;