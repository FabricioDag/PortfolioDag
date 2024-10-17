import { useState, useEffect } from 'react';
import pattern from './pattern.svg';
import style from './Advicegenerator.module.css';

const Advicegenerator = () => {
  const url = 'https://api.adviceslip.com/advice';

  const [dataId, setDataId] = useState(null);
  const [dataAdvice, setDataAdvice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para buscar os dados da API
  const fetchData = async () => {
    try {
      setLoading(true); // Mostrar que os dados estão sendo carregados
      const res = await fetch(url);
      if (!res.ok) throw new Error('Cannot find any advice');
      const data = await res.json();

      setDataId(data.slip.id);
      setDataAdvice(data.slip.advice);
      setError(null); // Resetar erro após sucesso
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Parar o estado de carregamento
    }
  };

  // UseEffect para buscar o primeiro conselho ao montar o componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`${style.Advicegenerator} application`}>
      <div className={style.wrapperAdvice}>
        {loading ? (
          <p className={style.loadingText}>Loading advice</p>
        ) : error ? (
          <p className={style.errorText}>Error: {error}</p>
        ) : (
          <>
            <p className={style.adviceId}>ADVICE #{dataId}</p>
            <p className={style.adviceText}>"{dataAdvice}"</p>

            <img
              className={style.pattern}
              src={pattern}
              alt="Stylized Pattern"
            />
          </>
        )}
        <button
          onClick={fetchData}
          disabled={loading}
          className={`${style.randomButton}  ${loading ? style.Loading : ''}`}
        >
          <svg
            className={style.diceIcon}
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { Advicegenerator };
