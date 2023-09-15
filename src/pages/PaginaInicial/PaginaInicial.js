import "./PaginaInicial.css";

export const PaginaInicial = () => {
  return (
    <div>
      <div className="header"></div>
      <div className="inicial-container">
        <div className="esquerda-container">
          <div className="imagem-esquerda"></div>
          <div className="frase">
            <p>
              Bem-vindo(a) ao <span class="meu-mentor">Meu Mentor</span>, a
              plataforma online que conecta mentores experientes a indivíduos em
              busca de orientação e crescimento pessoal e profissional. Aqui,
              você encontrará um ambiente seguro e estimulante para desenvolver
              suas habilidades e alcançar seus objetivos.
            </p>
          </div>
        </div>
        <div className="direita">
          <div className="direita-container">
            <div className="objetivos">Nossos Objetivos:</div>
            <div className="circles-container">
              <div className="circles-row">
                <div className="circle">1</div>
                <div className="frases">
                  Facilitar a comunicação entre professores, monitores e alunos.
                </div>
              </div>
              <div className="circles-row">
                <div className="circle">2</div>
                <div className="frases">Melhorar o desempenho acadêmico.</div>
              </div>
              <div className="circles-row">
                <div className="circle">3</div>
                <div className="frases">
                  Desenvolver habilidades de estudo eficazes.
                </div>
              </div>
              <div className="circles-row">
                <div className="circle">4</div>
                <div className="frases">
                  Aprofundar o conhecimento em matérias do seu curso.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};
