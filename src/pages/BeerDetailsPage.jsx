import { useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

function BeerDetailsPage() {
    const [beer, setBeer] = useState({});

    const { beerId } = useParams();

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then((response) => {
            setBeer(response.data);
        });
    }, []);

    return (
        <div className="beer-card-detail">
            <img className="beer-card__image" src={beer.image_url} alt={beer.name} />
            <div className="beer-card__infos">
                <h4>{beer.name}</h4>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <small>{beer.contributed_by}</small>
            </div>
        </div>
    );

}

export default BeerDetailsPage;
