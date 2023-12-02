import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { TodosProvider } from "../context/TodosContext";

const TodosLogic = () => {
    
    return (
        <div>
            <TodosProvider>
                <InputTodo />
                <TodosList />
            </TodosProvider>
            
        </div>
        
    );
};

export default TodosLogic;