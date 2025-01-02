import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";
import "../assets/styles/Todo.css";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    console.log("delete", id);
    dispatch(deleteTodo(id));
  };

  // const markAsDoneHandler = (id) => {
  //     console.log("mark as done", id);
  //     dispatch(markAsDone(id));
  //   };

  const toggleDoneHandler = (id) => {
    dispatch(markAsDone(id)); // Toggle 'isDone' state
  };

  return (
    <>
      <AddForm />
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none", // Strike-through if done
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
            {/* Toggle Mark as Done/Undo based on isDone */}
            <button onClick={() => toggleDoneHandler(todo.id)}>
              {todo.isDone ? "Undo" : "Mark as Done"} {/* Conditional button text */}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
