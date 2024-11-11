import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PrimaryButton } from "../buttons/PrimaryButton";

interface GameCardProps {
  imageUrl: string;
  title: string;
  price: number;
}

const GameCard: React.FC<GameCardProps> = ({ imageUrl, title, price }) => {
  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "#0A050D",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          height: "220px",
          width: "100%",
          backgroundColor: "#cccF",
          borderRadius: "5px",
        }}
      >
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={title}
          style={{ height: "100%", objectFit: "cover", borderRadius: "5px" }}
        />
      </div>
      <Card.Body style={{ padding: "0px", marginTop: "16px" }}>
        <Card.Title style={{ color: "white" }}>{title}</Card.Title>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "600", color: "#747bff" }}>
            R$ {price.toFixed(2)}
          </div>
          <PrimaryButton title="Saiba Mais" onClick={() => {}} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
