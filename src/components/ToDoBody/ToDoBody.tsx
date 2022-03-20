import React, { useContext } from "react";
import {ToDoCard} from "../ToDoCard/ToDoCard";
import {ToDo} from "../../global";
import {ToDoContext} from "../../context/ToDoState";


export const ToDoBody = () => {

    const { todos } = useContext(ToDoContext);

    return(
        <div>
            {
                todos.map((item: ToDo)=>{
                    return <div style={{display: item.isHidden? 'none': '' }} key = {item.id}>
                        <ToDoCard {...item}/>
                    </div>
                })
            }
        </div>
    )
}