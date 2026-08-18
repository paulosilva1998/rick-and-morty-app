function PersonagemCard({ personagem }) {
  return (
    <div className="card-personagem">
      <img src={personagem.image} alt={personagem.name} />
      <div className="card-content">
        <h3>{personagem.name}</h3>
        <p><strong>Espécie:</strong> {personagem.species}</p>
        <p><strong>Status:</strong> {personagem.status}</p>
        <p><strong>Gênero:</strong> {personagem.gender}</p>
        <p><strong>Localização Atual:</strong> {personagem.location?.name || "Desconhecida"}</p>
      </div>
    </div>
  );
}

export default PersonagemCard;