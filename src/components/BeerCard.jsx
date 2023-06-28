import { Link } from "react-router-dom";

export default function BeerCard({ beer }) {
  return (
    <div className="beer-card">
      <img className="beer-card__image" src={beer.image_url} alt={beer.name} />
      <div className="beer-card__infos">
        <Link to={`/beers/${beer._id}`}>
          <h4>{beer.name}</h4>
        </Link>
        <p>{beer.tagline}</p>
        <small>{beer.contributed_by}</small>
      </div>
    </div>
  );
}
