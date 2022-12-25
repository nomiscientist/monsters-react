import './card.styles.css';

const Card = ({profile}) => {

    const { name, id, email } = profile;
    return (
        <div className="card-container" key={id}>
            <img alt={` profile ${name}`}
                src={`https://robohash.org/${id}?set=set4&size=180x180`}></img>

            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}

export default Card;