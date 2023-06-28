import { Link } from "react-router-dom";
import beersImage from "../assets/beers.png";
import newBeerImage from "../assets/new-beer.png";
import randomBeerImage from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="beers">
      <div className="beer">
        <img src={beersImage} alt="beers" />
        <div className="beer__infos">
          <Link to="/beers">
            <h2 className="beer__title">Beers</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat bibendum lectus, sed
            dictum eros lacinia ac. Phasellus vel fringilla ante, eu blandit nisl. Mauris maximus
            vel lectus dignissim elementum. Nullam lorem massa, facilisis in maximus non, fermentum
            a ipsum. Vivamus vitae lacinia risus. Morbi quis nisl euismod nisl dapibus ullamcorper
            ut a dolor. Maecenas ac felis sit amet justo aliquam pharetra. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aenean sed arcu justo. Proin vestibulum neque enim,
            ut elementum purus rhoncus ut. Nam dignissim viverra nunc, bibendum mollis est sagittis
            eget. Vivamus posuere dictum libero, ut lacinia felis. Ut porttitor sollicitudin tortor
            nec faucibus. Etiam lacinia sollicitudin tempor.{" "}
          </p>
        </div>
      </div>

      <div className="beer">
        <img src={randomBeerImage} alt="random beer" />
        <div className="beer__infos">
          <Link to="/random-beer">
            <h2 className="beer__title">Random Beer</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat bibendum lectus, sed
            dictum eros lacinia ac. Phasellus vel fringilla ante, eu blandit nisl. Mauris maximus
            vel lectus dignissim elementum. Nullam lorem massa, facilisis in maximus non, fermentum
            a ipsum. Vivamus vitae lacinia risus. Morbi quis nisl euismod nisl dapibus ullamcorper
            ut a dolor. Maecenas ac felis sit amet justo aliquam pharetra. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aenean sed arcu justo. Proin vestibulum neque enim,
            ut elementum purus rhoncus ut. Nam dignissim viverra nunc, bibendum mollis est sagittis
            eget. Vivamus posuere dictum libero, ut lacinia felis. Ut porttitor sollicitudin tortor
            nec faucibus. Etiam lacinia sollicitudin tempor.{" "}
          </p>
        </div>
      </div>

      <div className="beer">
        <img src={newBeerImage} alt="new beer" />
        <div className="beer__infos">
          <Link to="/new-beer">
            <h2 className="beer__title">New Beer</h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat bibendum lectus, sed
            dictum eros lacinia ac. Phasellus vel fringilla ante, eu blandit nisl. Mauris maximus
            vel lectus dignissim elementum. Nullam lorem massa, facilisis in maximus non, fermentum
            a ipsum. Vivamus vitae lacinia risus. Morbi quis nisl euismod nisl dapibus ullamcorper
            ut a dolor. Maecenas ac felis sit amet justo aliquam pharetra. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aenean sed arcu justo. Proin vestibulum neque enim,
            ut elementum purus rhoncus ut. Nam dignissim viverra nunc, bibendum mollis est sagittis
            eget. Vivamus posuere dictum libero, ut lacinia felis. Ut porttitor sollicitudin tortor
            nec faucibus. Etiam lacinia sollicitudin tempor.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
