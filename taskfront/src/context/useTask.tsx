import { useContext } from "react";
import {TaskContext} from "./TaskContext";

export const useTask = () => {
    const context = useContext(TaskContext);
    if(!context) throw new Error('useTask must be defined')
    return context
}