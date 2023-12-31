import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";


const TodosLogic = () => {
    const [todos, setTodos] = useState(getInitialTodos());
    function getInitialTodos() {
        // getting stored items
        const temp = localStorage.getItem('todos');
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
    }

    useEffect(() => {
        // storing todos item
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos', temp);

    }, [todos]);
    const handleChange = (id) => {
        setTodos((prevState) =>
            prevState.map((todo) => {
            if (todo.id === id) {
                return {
                ...todo,
                completed: !todo.completed,
                };
            }
            return todo;
            })
        );
    };

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map((todo) =>{
                if (todo.id === id){
                    todo.title = updatedTitle;
                }
                return todo;
            })
        );
    };
    const delTodo = (id) =>{
        setTodos([
            ...todos.filter((todo) =>{
                return todo.id !== id;
            }),
        ]);
    };
    const addTodoItem = (title) => {
        // update state with user's input
        const newTodo = {
            id:uuidv4(), 
            title:title,
            completed:false,
        };
        setTodos([...todos, newTodo]);
    };
    

    return (
        <div>
            <InputTodo addTodoItem={addTodoItem} />
            <TodosList 
                todosProps={todos} 
                handleChange={handleChange} 
                delTodo={delTodo}
                setUpdate = {setUpdate}
            />
        </div>
        
    );
};

export default TodosLogic;