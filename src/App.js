import './App.css';
import Card from './components/Card';
import bulbasaur from './assets/001.png'
function App() {
  const pokemon = [
    {
      name: 'Bulbasaur',
      type: 'grass',
      image: bulbasaur,
      description: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger."
    }
  ]
  return (
    <div className="App">
      <div className="cards">
        <Card name={pokemon[0].name} image={pokemon[0].image} type={pokemon[0].type} description={pokemon[0].description}/>
        <Card name='Bulbasaur' type="grass" description="I eat grass"/>
        </div>
    </div>
  );
}

export default App;
