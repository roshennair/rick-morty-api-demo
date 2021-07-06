import { useState } from 'react';
import Character from './components/Character';

const App = () => {
	const [showCharacter, setShowCharacter] = useState(false);
	const [character, setCharacter] = useState({});

	const fetchCharacter = async (id) => {
		const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
		const characterData = await response.json();
		console.log(characterData);
		setCharacter(characterData);
		setShowCharacter(!showCharacter);
	}

	return (
		<>
			<h1>Rick and Morty API Demo</h1>

			<button onClick={() => fetchCharacter(1)}>
				{showCharacter ? 'Hide Rick!' : 'Show me Rick!'}
			</button>

			{
				showCharacter
					? <Character character={character} />
					: <p id="suggestion">Click the button, you pleb.</p>
			}

			<a id="secret" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1">Secret sauce</a>
		</>
	);
}

export default App;
