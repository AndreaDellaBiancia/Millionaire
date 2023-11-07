import { useRouteError } from "react-router-dom";
import coffreFort from "../../assets/images/coffre-fort.jpg";
export default function ErrorPage() {
  const error: any = useRouteError();

  // Vérifier si l'objet error est undefined
  const statusText = error?.statusText;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <img src={coffreFort} alt="Coffre-fort vide"/>
      <p>
        <i>{statusText || error?.message}</i>
      </p>
    </div>
  );
}