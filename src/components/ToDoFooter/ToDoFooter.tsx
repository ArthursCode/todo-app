
import classes from "../ToDoMain/ToDoMain.module.css"
import React, {useContext} from "react";
import {ToDoContext} from "../../context/ToDoState";
import {ToDo} from "../../global";

export const ToDoFooter = () => {
    const {todos, handleDeleteCompleted} = useContext(ToDoContext)

    let completed = todos.filter((todo: ToDo)=>todo.isDone).length

    return(
        <div className={classes.card}>
            <p> {completed}/{todos.length} Completed</p>

            <button onClick = {handleDeleteCompleted}> Deleted Completed Todos</button>
        </div>
    )
}