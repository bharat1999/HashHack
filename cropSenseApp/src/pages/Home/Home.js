import { Container, Button } from "react-bootstrap";
import CustomNavbar from "../../Components/CustomNavbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/predict`;
    navigate(path);
  };

  return (
    <div className="mainHome">
      <CustomNavbar />
      <Container className="content">
        <p className="heading">Welcome to Cropsense</p>
        <p className="subHeading">
          We propose the practice of smart agriculture using machine learning
          and automation
        </p>
        <Button
          style={{ marginTop: "15px" }}
          variant="success"
          onClick={routeChange}
        >
          Try Plant Disease Detection
        </Button>
      </Container>
    </div>
  );
};

export default Home;
