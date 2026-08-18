import { useState, useEffect } from "react";
import ListaPersonagens from "./components/ListaPersonagens";
import "./App.css";

const API_BASE_URL = "https://rickandmortyapi.com/api/character";

function App() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [termoBusca, setTermoBusca] = useState("");

  // Função assíncrona para buscar personagens via API
  const carregarPersonagens = async (url = API_BASE_URL) => {
    setLoading(true);
    setErro(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Não foi possível carregar os personagens.");
      }
      const data = await response.json();
      setPersonagens(data.results || []);
    } catch (err) {
      setPersonagens([]);
      setErro("Não foi possível carregar os personagens.");
    } finally {
      setLoading(false);
    }
  };

  // Carrega os personagens na montagem inicial do componente (useEffect)
  useEffect(() => {
    carregarPersonagens();
  }, []);

  // Manipulador de Pesquisa
  const handlePesquisar = (e) => {
    e.preventDefault();
    if (!termoBusca.trim()) {
      carregarPersonagens(API_BASE_URL);
      return;
    }
    carregarPersonagens(`${API_BASE_URL}/?name=${encodeURIComponent(termoBusca.trim())}`);
  };

  // Manipulador para Limpar Pesquisa
  const handleLimpar = () => {
    setTermoBusca("");
    carregarPersonagens(API_BASE_URL);
  };

  return (
    <div className="container">
      <h1>Consumo de API - Rick and Morty</h1>

      {/* Formulário de Busca */}
      <form className="search-container" onSubmit={handlePesquisar}>
        <input
          type="text"
          className="search-input"
          placeholder="Pesquisar personagem..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
        <button type="submit" className="btn btn-search">
          Pesquisar
        </button>
        <button type="button" className="btn btn-clear" onClick={handleLimpar}>
          Limpar pesquisa
        </button>
      </form>

      {/* Feedback de Carregamento */}
      {loading && <p className="feedback-message">Carregando personagens...</p>}

      {/* Feedback de Erro */}
      {!loading && erro && <p className="feedback-message error-message">{erro}</p>}

      {/* Lista de Personagens */}
      {!loading && !erro && <ListaPersonagens personagens={personagens} />}
    </div>
  );
}

export default App;