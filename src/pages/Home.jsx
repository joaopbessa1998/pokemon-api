import { Pokemon } from "../components/Pokemon";
import PokemonLogo from "../assets/images/logo.webp"

export const Home = () => {
  return (
    <div className="container">
      <img className="logo" src={PokemonLogo} alt="Pokemon Logo" />
      <Pokemon name="Pikachu" />
      <Pokemon name="Charmander" />
      <Pokemon name="Charizard" />
      <Pokemon name="Squirtle" />
      <Pokemon name="Ditto" />
    </div>
  );
}
