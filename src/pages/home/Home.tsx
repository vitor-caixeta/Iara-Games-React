import { useContext } from "react";
import { PrimaryButton } from "../../components/buttons/PrimaryButton";
import { CustomLayout } from "../../components/custom-layout/CustomLayout";
import Navigation from "../../components/layout/navbar/Navbar";
import { AuthContext } from "../../store/AuthContext";
import Hero from "../../components/layout/hero/Hero";
import GamesGallery from "../../components/games-gallery/GamesGallery";

export const Home = () => {
  const { isAuthenticated, setIsAuthenticatedHandler } =
    useContext(AuthContext);

  return (
    <CustomLayout>
      <Hero />
      <GamesGallery />
    </CustomLayout>
  );
};
