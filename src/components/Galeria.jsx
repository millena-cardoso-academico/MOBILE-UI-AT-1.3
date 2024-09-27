import { useState } from 'react';
import styles from '../styles/Galeria.module.css';

const imagensIniciais = [
  'https://a.storyblok.com/f/178900/960x540/dab7e26e52/frieren.jpg/m/filters:quality(95)format(webp)',
  'https://easycdn.es/1/imagenes/animanga-0_343202.jpg',
  'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2023/03/legiao_7D15GwYj3rau.jpg.webp',
  'https://animenew.com.br/wp-content/uploads/2024/02/Sousou-no-Frieren-disponivel-data-e-hora-do-episodio-22-jpg-webp.webp',
  'https://lunetas.com.br/wp-content/uploads/2022/04/animes-e-criancas-portal-lunetas.jpg',
];

function Galeria() {
  const [imagens, setImagens] = useState(imagensIniciais);
  const [quantidadeImagens, setQuantidadeImagens] = useState(5);
  const [novaImagem, setNovaImagem] = useState(null);

  const selecionarImagem = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo && arquivo.type.startsWith('image/')) {
      const novaImagemURL = URL.createObjectURL(arquivo);
      setNovaImagem(novaImagemURL);
    } else {
      alert('Por favor, selecione um arquivo de imagem.');
    }
  };

  const enviarImagem = () => {
    if (novaImagem) {
      setImagens([...imagens, novaImagem]);
      setQuantidadeImagens(imagens.length + 1);
      setNovaImagem(null);
    }
  };

  const removerImagem = (index) => {
    const novasImagens = imagens.filter((_, i) => i !== index);
    setImagens(novasImagens);
    setQuantidadeImagens(novasImagens.length);
  };

  const mostrarMaisImagens = () => {
    if (quantidadeImagens < imagens.length) {
      setQuantidadeImagens(quantidadeImagens + 1);
    }
  };

  const mostrarMenosImagens = () => {
    if (quantidadeImagens > 1) {
      setQuantidadeImagens(quantidadeImagens - 1);
    }
  };

  return (
    <div className={styles.galeriaContainer}>
      <h1 className={styles.titulo}>Galeria de Animes</h1>
      <div className={styles.controleImagens}>
        <button className={styles.botao} onClick={mostrarMaisImagens}>+</button>
        <span>{quantidadeImagens}</span>
        <button className={styles.botao} onClick={mostrarMenosImagens}>-</button>
      </div>
      <input
        type="file"
        accept="image/*"
        className={styles.botaoAdicionar}
        onChange={selecionarImagem}
      />
      {novaImagem && (
        <button className={styles.botaoEnviar} onClick={enviarImagem}>
          Enviar
        </button>
      )}
      <div className={styles.galeria}>
        {imagens.slice(0, quantidadeImagens).map((imagem, index) => (
          <div key={index} className={styles.imagemContainer}>
            <img
              src={imagem}
              alt={`Imagem ${index}`}
              className={styles.imagem}
            />
            <button className={styles.botaoRemover} onClick={() => removerImagem(index)}>
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;