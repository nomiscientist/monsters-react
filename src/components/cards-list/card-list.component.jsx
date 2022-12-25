import Card from "../card/card.component";
import './card-list.styles.css';

const CardList = ({ profiles }) => {
    return (<div className="card-list" >
        {
            profiles.map((profile) => (<Card profile={profile} />))
        }
    </div>)
}

export default CardList;