import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// stop server + npm run build (cria uma pasta chamada build) + sudo npm i -g serve digita senha + serve -s build -p 8000 
// npm i json-server + (no package.json) incluir no final de "scripts":{"server": "json-server --watch db.json --port 5000"} + npm run server (cria um arq db.json) 
// abrir novo terminal + npm start + (no db.json) trocar de '"posts": []' para '"tasks": []' e deletar tudo que tem dentro. Fica só isto no arq:

// {
//   "tasks": []
// }

//colar o conteúdo do objeto do App.js (cortar de lá e colar no db.json). const [tasks, setTasks] = useState([]) ---> empty array no App.js. No db.json, mudar tudo para strings
// No navegador: http://localhost:5000/tasks
// para que carregue qdo a pág carregar, usamos useEffect ---> 
// No App.js, import { useState, useEffect } from "react";

// novo terminal + npm i react-router