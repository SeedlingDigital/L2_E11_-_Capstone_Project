import Ract from "react";
import { Card } from 'react-bootstrap'
import { useLocation, useNavigate } from "react-router-dom";
import "./Card.css";



function LandingCard(props){

  const location = useLocation();
  const navigate = useNavigate();


  return (
      <Card className={"card-color"} onClick={() => navigate(props.navigatePath)}>
        <Card.Img className={"card-image"} variant={"top"} src={props.image} alt={props.imageAltDescription}/>
        <Card.Body className={"padding-card"}>
          <Card.Title className={"card-title"}>{props.title}</Card.Title>
          <Card.Subtitle className={"card-sub-title"}>{props.subtitle}</Card.Subtitle>
          <Card.Text className={"card-description"}>{props.text}</Card.Text>
        </Card.Body>
      </Card>
  );
}
export default LandingCard;