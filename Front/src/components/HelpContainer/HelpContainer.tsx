import { Container, HelpItem } from "./CssHelpContainer";

function HelpContainer() {
  return (
    <Container>
      <HelpItem>
        <i className="fa-sharp fa-solid fa-phone-volume"></i>
      </HelpItem>
      <HelpItem style={{ display: "flex", flexDirection: "column" }}>
        <i
          className="fa-sharp fa-solid fa-star-half-stroke"
          style={{ display: "flex", flexDirection: "column" }}
        ></i>
        50 : 50
      </HelpItem>
      <HelpItem>
        <i className="fa-sharp fa-solid fa-people-group"></i>
      </HelpItem>
    </Container>
  );
}

export default HelpContainer;
