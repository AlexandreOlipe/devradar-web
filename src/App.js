import React, { useState, useEffect } from 'react';
import api from './service/api';

import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const techsArray = techs
                          .split(',')
                          .map((t) => t.trim);

    const response = await api.post('/devs', {
      github_username,
      techsArray,
      latitude,
      longitude
    });

    console.log(response);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={(e) => setGithubUsername(e.target.value)}/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={(e) => setTechs(e.target.value)}/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}/>
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
