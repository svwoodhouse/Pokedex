import "./App.css";
import Card from "./components/Card";
import { Bulbasaur, Ivysaur, Venusaur } from "./assets";

function App() {
  const pokemon = [
    {
      name: "Bulbasaur",
      type: "grass",
      image: Bulbasaur,
      number: 1,
      description:
        "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    },
    {
      name: "Ivysaur",
      type: "grass",
      image: Ivysaur,
      number: 2,
      description:
        "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    },
    {
      name: "Venusaur",
      type: "grass",
      image: Venusaur,
      number: 3,
      description:
        "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    },
  ];
  return (
    <div className="App">
      <div className="cards">
        {pokemon.map((poke) => {
          return (
            <Card
              name={poke.name}
              image={poke.image}
              type={poke.type}
              description={poke.description}
              number={poke.number}
              key={poke.number}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
