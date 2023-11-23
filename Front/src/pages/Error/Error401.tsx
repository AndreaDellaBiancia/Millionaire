import { Link } from "react-router-dom";
import coffreFort from "../../assets/images/coffre-fort-ferme.jpg";
import "./style.css"
export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>
      Accès refusé : vous n'avez pas les autorisations nécessaires pour afficher cette ressource !      </h1>
      <p>Revenez à la <Link to="/">page  d'accueil</Link>  </p> 
      <div><img src={coffreFort} alt="Coffre-fort vide" /></div>
    </div>
  );
}
