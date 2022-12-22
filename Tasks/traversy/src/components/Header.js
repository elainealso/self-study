// import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'

// criar componente ---> (não é mais preciso importar React from 'react') -> igual parênteses seta chave (dentro return parênteses), export default

//Aqui só criei o componente, p/ usar ---> importar no App.js (import Header from "./components/Header";) e chamar dentro da funcão

//! Props
//A key:value fica no App.js, props como parâmetro do componente e chama dentro da funcão

//! HTML
//As minhas tags devem ficar dentro do return do meu component e estilizo elas no index.css. Já as propriedades (key:value) ficam nas minhas tags e são linkadas nos filhos (btn é filho de header). Abaixo, minhas props são color e text, vou chamar no Button ---> const Button = ({color, text})
// props de cor e incluir texto no botão ---> color='green' text='Hello'
// é no pai (header) que eu posso multiplicar os filhos (btn)

import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  // const onClick = ()=>{
  //     console.log('Click')
  // }
  return (
    <header className="header">
      {/* <h1 style={headingStyle}> {title} </h1> */}
      <h1> {title} </h1>
      {location.pathname==='/'&&<Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />}
      {/* <Button color="blue" text="texto aqui" />
      <Button color="yellow" text="texto aqui" /> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

/* const headingStyle = {
      color: "red",
      backgroundColor: "black",
    }; */

export default Header;
