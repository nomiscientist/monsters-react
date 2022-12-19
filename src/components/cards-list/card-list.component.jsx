import { Component } from "react";

class CardList extends Component {

    render() {
        console.log('render CardList');
        const { profiles } = this.props;

        return (
            profiles.map((profile) => {
                return (<div key={profile.id}>
                    <h1>{profile.name}</h1></div>)
            })
        )
    }
}

export default CardList;