import { useState, useEffect } from "react";
import axios from "axios";

function AllBeersPage() {
    const [allBeers, setAllBeers] = useState([]);

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log('response.data', response.data);
                setAllBeers(response.data);
            })
    }), [];

    return (
        <div>

        </div>

    )
}
export default AllBeersPage;
