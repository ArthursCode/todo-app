import { AnyAction } from 'redux'
import {ToDo} from "../global";
import {ACTION_TYPES} from "./ToDoActions";

export const ToDoReducer = (state: ToDo[] | undefined = [], action: AnyAction) => {

    console.log(state, 'state')
    console.log(action, 'action')

    switch (action.type) {
        case ACTION_TYPES.ADD:
            return[ ...state,{
                id:Math.random(),
                title:action.payload.title,
                description:action.payload.description,
                isDone:false,
                isHidden:false
            }];
        case ACTION_TYPES.DONE:
            return state.map((todoItem: ToDo)=>{
                return  todoItem.id === action.payload.id ? {
                    ...todoItem,
                    isDone:action.payload.isDone
                }:{...todoItem}
            });
        case ACTION_TYPES.FILTER:
            return state.map((todoItem: ToDo)=>{
                return {...todoItem, isHidden: !todoItem.title?.includes(action.payload.title)}
            });

        case ACTION_TYPES.EDIT:
            return state.map((todoItem: ToDo) => {
                return  todoItem.id === action.payload.id ? {
                    ...todoItem,
                    title:action.payload.title,
                    description:action.payload.description
                } : {...todoItem}
            });

        case ACTION_TYPES.DELETE:
            return state.filter((item: ToDo)=>item.id!==action.payload.id);

        case ACTION_TYPES.DELETE_COMPLETED:
            return state.filter((item: ToDo)=>!item.isDone)

        default:
            console.log( 'i am default')
    }
}