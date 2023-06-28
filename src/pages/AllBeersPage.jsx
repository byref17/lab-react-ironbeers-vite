import axios from "axios";
import { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setAllBeers(response.data);
    });
  }, []);

  return (
    <div className="all-beers">
      {allBeers.map((beer) => {
        return <BeerCard key={beer._id} beer={beer} />;
      })}
    </div>
  );
}
export default AllBeersPage;
