import React from 'react';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/34045338?v=4" alt="Alexandre Pereira"/>
              <div className="user-info">
                <strong>Alexandre Pereira</strong>
                <span>Angular, Java, SQL</span>
              </div>
            </header>
            <p>Apaixonado por tecnologia e sempre em busca de novos conhecimentos</p>
            <a href="https://github.com/AlexandreOlipe">Acessar perfil GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/34045338?v=4" alt="Alexandre Pereira"/>
              <div className="user-info">
                <strong>Alexandre Pereira</strong>
                <span>Angular, Java, SQL</span>
              </div>
            </header>
            <p>Apaixonado por tecnologia e sempre em busca de novos conhecimentos</p>
            <a href="https://github.com/AlexandreOlipe">Acessar perfil GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/34045338?v=4" alt="Alexandre Pereira"/>
              <div className="user-info">
                <strong>Alexandre Pereira</strong>
                <span>Angular, Java, SQL</span>
              </div>
            </header>
            <p>Apaixonado por tecnologia e sempre em busca de novos conhecimentos</p>
            <a href="https://github.com/AlexandreOlipe">Acessar perfil GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/34045338?v=4" alt="Alexandre Pereira"/>
              <div className="user-info">
                <strong>Alexandre Pereira</strong>
                <span>Angular, Java, SQL</span>
              </div>
            </header>
            <p>Apaixonado por tecnologia e sempre em busca de novos conhecimentos</p>
            <a href="https://github.com/AlexandreOlipe">Acessar perfil GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
