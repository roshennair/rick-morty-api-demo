const Character = ({ character }) => {
	return (
		<div id="character-container">
			<h2>{character.name}</h2>
			<img src={character.image} alt={character.name} />
			<ul>
				<li><strong>Species:</strong> {character.species}</li>
				<li><strong>Gender:</strong> {character.gender}</li>
				<li><strong>Status:</strong> {character.status}</li>
				<li><strong>Current location:</strong> {character.location.name}</li>
				<li><strong>Origin:</strong> {character.origin.name}</li>
				<li>Appeared in <strong>{character.episode.length} episodes</strong> of Rick and Morty</li>
				<li><a href={character.url}><strong>More info</strong></a></li>
			</ul>
		</div>
	);
}

export default Character;