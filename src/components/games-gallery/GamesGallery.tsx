import React from "react";
import { Container } from "react-bootstrap";
import GameCard from "../game-card/GameCard";

const games = [
  {
    id: 1,
    imageUrl: "https://s3-alpha-sig.figma.com/img/46f9/6635/4be59ded09f2fae7a3f54f95d575956c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MjdqO-mQNityr1YeoiSCG-LSYLDZoynwSPV90RkQGZkjjBaQ~zfMhVggcgoFt8dCqsIoAn~bmO8DjfglZP61wjOMpeqh8cl~NbFuQivnJsO9CtISKev8cnemGtnhYFWK-dRCAXmp~e0t6YsH1SSDOPsRFjHmsfrTLEmN8sWH~-iG9T7oo5zW~7PHGIiOWgF8UpQ-fSsgvrzT25DMkkuheltw4dHD9yWEsfQnuyEx17aJRwCGL7qdAO3XieFWCRDcUGnPwEReJhRk68ogCxl5gAmotiZW07PP4UL82teLYzSTZWL45zTw9SzqDLMekoHbQzTJbXHigABKdq9yp6IwrA__",
    title: "Dragon Age - The Veilguard",
    price: 99,
    isFavorite: false,
  },
  {
    id: 2,
    imageUrl: "https://s3-alpha-sig.figma.com/img/e724/0ae3/d176ead85e8ef7f4c4c1f14853eb1425?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L~ySA4xbyuLOHKYCXKbPlZ5EjVeVraYqaElsQn15mB2Fr08x44L04CFCQzBBcQ4GaZx9tshU6KUldE0WsMHLhnKRcacaTzaUDyuiPYOFZzC2nHmFYHjMFoy8HLK9EkGh46X1sHJ~5c9YoZcM4xMl4Xue4FtfwsYH0usaBdn6yAODAYRZ57OXjFPHOUXUb1FptyjuKIEYmHDAw9oFHHFhmX6wTD9fGff07Lg5VMTpzBsi7g5ZoKLLHTYAvL1XYKKy8tV~WImfuG6AI6lNngEWkJA-gWgUFpBDeXqF150UxgzAUt6URJY9s~dqQ3iJl01N86p-lAysicthXKoPcxot3g__",
    title: "Death Stranding",
    price: 79,
    isFavorite: false,
  },
  {
    id: 3,
    imageUrl: "https://s3-alpha-sig.figma.com/img/aab4/74a5/c538e25cca1bd8876ea661730523c1de?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SniS2S2MUc9Vnu04EIzrLBLVVhcL-Cr8U9BqaPMHBv-n9YN7PPV5v49jjCoYGWWkrlk3Zjzu7qISVOWgu9NN4HxRLXb5Y0fHV448GRSCOQ6~G3KJZeaA~s7pNBkXN06cPdNJXabY1634yGV5mq3HFQAlq3nvOqTlUOMK3EIexRCEAzWAZmhNJZB-lzTz~-uj0HCC2wwb9LRW2CSQiFOHmKQgDtyRJe8lR-PD2K7vtYruZQwMEHk~R13G2S9g7JZQIrNmb7xWDWzEobZFM2VNTX~WOj3GqzTS9bX2nKf70Gnmrs-kWes1XIFOcQoxf5jOiZFU83KjhZvq2GLGQ9gFxg__",
    title: "Dead By Daylight",
    price: 89,
    isFavorite: false,
  },
  {
    id: 4,
    imageUrl: "https://s3-alpha-sig.figma.com/img/7563/db07/908c1d6534104c7c754f972a2ce5f2c9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IzkqI1f4JvQ9C9vhUxJ2aoBtuiNSP5UfcPGIXNG8-6LPdXXUcYMOyuI5KCSOunjdfKjar-~UTqjWF0lDthbiKVBq6aQtDSCqYADTQtHgB4tAhbL36sQImYAB25gAlTyEw9pV4apK7--BHU5jYroOJ57w6siXvHkabloKr29Q0JuKj3fbW3i~uc2S4eHxgMO4AZQDUvxQyqweAbdLteib3yzPG7ZPv9DcdXCd-0Z7opMs87B5x~FPpCRNtesOnrY6MP~8KJRi2Kdmmo4xzDIBkYWxJofWZrmOTrwvnsx62RlQ0IlzFjzRZ3Ankb1usGOTFeMDy52VYH64lF6liibeqg__",
    title: "The Last Of Us",
    price: 69,
    isFavorite: false,
  },
];

const GamesGallery = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #621D8E, #9E4CD6, #621D8E)",
        padding: "50px 100px",
        paddingBottom: "100px",
      }}
    >
      <div id="destaques" className="mb-[40px]">
        <h2 className="text-white mb-4">Destaques</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {games.map((game) => {
            return (
              <GameCard
                key={game.id}
                imageUrl={game.imageUrl}
                title={game.title}
                price={game.price}
              />
            );
          })}
        </div>
      </div>
      <div id="novidades" className="mb-[40px]">
        <h2 className="text-white mb-4">Novidades</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {games.map((game) => {
            return (
              <GameCard
                key={game.id}
                imageUrl={game.imageUrl}
                title={game.title}
                price={game.price}
              />
            );
          })}
        </div>
      </div>
      <div id="promocoes" className="mb-[40px]">
        <h2 className="text-white mb-4">Promoções</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {games.map((game) => {
            return (
              <GameCard
                key={game.id}
                imageUrl={game.imageUrl}
                title={game.title}
                price={game.price}
              />
            );
          })}
        </div>
      </div>
      <div id="recomendados" className="mb-[40px]">
        <h2 className="text-white mb-4">Recomendados</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {games.map((game) => {
            return (
              <GameCard
                key={game.id}
                imageUrl={game.imageUrl}
                title={game.title}
                price={game.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GamesGallery;
