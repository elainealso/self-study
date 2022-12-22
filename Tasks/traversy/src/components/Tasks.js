import Task from "./Task";

//não quero meu obj (tasks) separado do meu component e sim como parte do state, então tiro da variável tasks aqui fora, coloco dentro de Tasks e importo useState
//como quero acessar Tasks de outros components, uso props. Ou seja, o import { useState } from "react"; fica no App.js e todo o useState também vai para o App.js; aí passo tasks no compoment como prop ---> No App.js = <Tasks tasks={tasks}/>; e aqui passa a props tasks como parâmetro ---> const Tasks = ({tasks}) => {
const Tasks = ({ tasks, onDelete, onToggle }) => {
  //   const [tasks, setTasks] = useState([
  //     {
  //       id: 1,
  //       text: "Doctors Appointment",
  //       day: "Feb 5th at 2:30pm",
  //       reminder: true,
  //     },
  //     {
  //       id: 2,
  //       text: "Meeting at school",
  //       day: "Feb 6th at 1:30pm",
  //       reminder: true,
  //     },
  //     {
  //       id: 3,
  //       text: "Food shopping",
  //       day: "Feb 5th at 4:30pm",
  //       reminder: false,
  //     },
  //   ]);
  return (
    <>
      {tasks.map((task, index) => (
        // <h3 key={task.id}>{task.text}</h3>
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} /> 
        // task como prop no component (task vem do css)
      ))}
    </>
  );
};
export default Tasks;

//no return = abre tag, abre chave, pluralObj.map, abre parênteses, abre parênteses, singular, fecha um, seta, abre parênteses, abre tag, abre chave, singular.keyDoObj
// Warning: Each child in a list should have a unique "key" prop. ---> precisa de uma key key={task.id}

// return(
//     <>
//     {plObj.map((sing)=>(<div>{sing.keyDoObj}</div>))}
//     </>
// )
