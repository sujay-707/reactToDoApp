//reducers

import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";
// import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "123", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTask = action.payload.trim(); // Remove leading/trailing spaces
    
      // Check if the task is not empty
      if (newTask) {
        const newTodo = {
          id: nanoid(),
          task: newTask,
          isDone: false,
        };
        state.todos.push(newTodo);
      } else {
        // Optionally, you can show a warning here or return
        alert("Cannot add empty task");
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // markAsDone: (state, action) => {
    //   state.todos = state.todos.map((todo) => {
    //     if (todo.id === action.payload) {
    //       todo.isDone = true;
    //     }
    //   });


    markAsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone; // Toggle the isDone state
        }
        return todo;
      });
    },
  },
});



export const {addTodo , deleteTodo , markAsDone} = todoSlice.actions;
export default todoSlice.reducer;   