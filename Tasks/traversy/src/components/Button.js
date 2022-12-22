import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
//   const variavel = (objeto) => {
//     console.log(objeto);
//   };  ---> mas não vamos criar o botão aqui porque como é um component, nem sempre vai ter o mesmo click, portanto, vamos usar click como prop ---> coloco onClick no prop (linha 3) e cód na Header (mãe)
  return (
    <button
      onClick={onClick} 
      style={{
        backgroundColor: color,
      }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
  //PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don't receive an error at the very end of our app by the console which might not be easy to deal with.
};

export default Button;
