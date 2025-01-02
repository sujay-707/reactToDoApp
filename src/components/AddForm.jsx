import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";


export default function AddForm()
{
    let [task , setTask] = useState("");
    let dispatch = useDispatch();

    const submitHandler = (evt) =>
    {
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");

    }
    return(
        <>
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setTask(e.target.value)} type="text" name="" value={task} id="" />
            <button>Add Task</button>
        </form>
        </>
    )
}