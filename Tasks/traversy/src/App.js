//! function based component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import About from "./components/About";

// App.js só fica com os pais

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  };

  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error Deleting This Task");
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: data.reminder,
            }
          : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />{" "}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                {showAddTask && <AddTask onAdd={addTask} />}{" "}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Tasks To Show"
                )}{" "}
              </>
            }
          />{" "}
          <Route path="/about" element={<About />} />{" "}
        </Routes>{" "}
        <Footer />
      </div>{" "}
    </Router>
  );
};

export default App;

// function App() {
//   const [showAddTask, setShowAddTask] = useState(false);

//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const getTasks = async () => {
//       const tasksFromServer = await fetchTasks();
//       setTasks(tasksFromServer);
//     };

//     getTasks();
//   }, []);

//   // Fetch Tasks
//   const fetchTasks = async () => {
//     const res = await fetch("http://localhost:5000/tasks");
//     const data = await res.json();
//     return data;
//   };

//   // Fetch Task (continua em toggleReminder)
//   const fetchTask = async (id) => {
//     const res = await fetch(`http://localhost:5000/tasks${id}`);
//     const data = await res.json();
//     return data;
//   };

//   // Add Task ----> funcão addTask + <AddTask onAdd={addTask} /> abaixo, no return. Em AddTask.js ----> const AddTask = ({onAdd}) => { ... e várias outras coisas
//   const addTask = async (task) => {
//     const res = await fetch("http://localhost:5000/tasks", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(task),
//     });
//     const data = await res.json();
//     setTasks([...tasks, data]);

//     // const id = Math.floor(Math.random() * 10000) + 1;
//     // const newTask = { id, ...task };
//     // setTasks([...tasks, newTask]);
//   };

//   // Delete Task ---> funcão deleteTask + onDelete={deleteTask} em Tasks; onDelete é prop + onDelete vira prop de Tasks lá em Tasks.js ---> const Tasks = ({ tasks, onDelete }) => {; +++ <Task key={task.id} task={task} onDelete={onDelete} />; +++ onDelete tbm vira props de Task lá em Task.js ---> const Task = ({ task, onDelete }) => {; +++ {task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={onDelete}/>
//   const deleteTask = async (id) => {
//         const res = await fetch(`http://localhost:5000/tasks/${id}`, {
//           method: 'DELETE',
//         })
//     // console.log("delete", id);
//     res.status === 200 ?
//       setTasks(tasks.filter((task) => task.id !== id)) :
//       alert('Error Deleting This Task')
//     // const [tasks=currentState, setTasks=updaterFunction] = useState(obj=initialState)
//     // [currentState, updaterFunction] = useState(initialState)
//   };

//   //Toggle Reminder = funcão toggleReminder + onToggle={toggleReminder} aqui + em Tasks.js ---> const Tasks = ({ tasks, onDelete, onToggle }) => { +++ <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} /> + em Task.js ---> const Task = ({ task, onDelete, onToggle }) => { +++ <div className="task" onDoubleClick={() => onToggle(task.id)}> /// se clicar duas vezes, mostra o id da tarefa (enqto console.log(id) abaixo)

//   // Toggle Reminder
//   const toggleReminder = async (id) => {
//     const taskToToggle = await fetchTask(id)
//     const updTask = {
//       ...taskToToggle,
//       reminder: !taskToToggle.reminder
//     }

//     const res = await fetch(`http://localhost:5000/tasks/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(updTask),
//     })

//     const data = await res.json()

//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? {
//           ...task,
//           reminder: data.reminder
//         } : task
//       )
//     )
//   }
//         // se task.id na iteracão atual for igual ao id passado, teremos um obj específico, se não não vai ter alteracão (vai ficar a task mesmo). Obj específico é o obj q a gente fez spread across todas as prop e valores, mudando o reminder, q vai ser o oposto do daquela task (de true p/ false e de false p/ true). Em Task.js ---> <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={() => onToggle(task.id)}>
//   return (
//     <div className="container">
//       <Header
//         onAdd={() => setShowAddTask(!showAddTask)}
//         showAdd={showAddTask}
//       />
//       {showAddTask && <AddTask onAdd={addTask} />}
//       {/* (acima), ternary ---> se showAddTask for true, add a component. Tudo depende de o padrão estar definido como true ou false ---> const [showAddTask, setShowAddTask] = useState(false); Se estiver false por padrão, não aparece. Se estiver true, aparece. Queremos que o btn faca o toggle. P/ isso, definimos acima ---> <Header onAdd={() => setShowAddTask(!showAddTask)} /> +++ onAdd passa em Header como prop +++ onClick={onClick} muda pra onClick={onAdd}*/}
//       {/* <Tasks tasks={tasks} onDelete={deleteTask} /> */}

//       {/* showAdd={showAddTask} (acima) +++ showAdd como parâmetro da Header +++ text={showAdd ? "Close" : "Add"} no return da Header */}
//       {tasks.length > 0 ? (
//         <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
//       ) : (
//         "No Tasks to Show"
//       )}
//       <Footer/>
//     </div>
//   );
// }
// export default App;

// //! class based component
// // import React from "react";
// // import Header from "./components/Header";
// // class App extends React.Component{
// //   render(){
// //     return <Header/>
// //   }
// // }
// // export default App;
