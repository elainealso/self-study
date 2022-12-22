// npm i react-icons /// importa e chama na tag
import { FaTimes } from "react-icons/fa";

//em vez de h3 pra cada task, um component separado

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={() => onToggle(task.id)}>
     
      {/* antes ---> <h3>My Task</h3>; era uma lista de My Task, agora ---> task na prop (const Task=({task})=>{) e Task.text abaixo, minha lista */}{" "}
      <h3>
     
        {/* {task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={onDelete}/> aqui o resultado é o obj, p/ que seja o id, abaixo: */}
        {task.text}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p> {task.day} </p>
    </div>
  );
};
export default Task;
// quero clicar no ícone e deletar a task, mas o event está no app component; podemos enviar uma funcão como prop ---> App.js
