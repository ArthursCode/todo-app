import classes from "../ToDoMain/ToDoMain.module.css";
import React, {ChangeEvent, useContext} from "react";
import {ToDoContext} from "../../context/ToDoState";

export const ToDoHeader = () => {

    const {handleFilter} = useContext(ToDoContext)

    const onFilter = (e: ChangeEvent<HTMLInputElement>) => {
        handleFilter(e.target.value);
    }

    return(

        <div>

            <div id={classes.title}>
                <h1>MY TODO LIST</h1>
                <label htmlFor="input">SEARCH</label>
                <br/>
                <input
                    onChange={onFilter}
                    placeholder="Search Todo..."
                    type="text"
                    id="input"/>
                <br/>
                <br/>
            </div>

        </div>
    )
}
