import { useState } from "react";
import { useRef } from "react";
import styles from "./styles/TodoItem.module.css";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";


const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {

    const [editing, setEditing] = useState(false);
    // const [updateInput, setUpdateInput] = useState(itemProp.title);
    const editInputRef = useRef(null);
    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    };
    const handleEditing = () =>{
        setEditing(true);
    };
    let viewMode = {};
    let editMode = {};
    if (editing){
        viewMode.display='none';
    }else{
        editMode.display = 'none';
    }

    const handleUpdatedDone = (event) =>{
        if (event.key === "Enter"){
            // setUpdate(updateInput, itemProp.id);
            setUpdate(editInputRef.current.value, itemProp.id);
            setEditing(false);
        }
    };

    return (
    <li className={styles.item}>
        <div className={styles.content} style={viewMode}>
                <input
                    type="checkbox"
                    checked={itemProp.completed}
                    onChange={() => handleChange(itemProp.id)}
                />
                <span style={itemProp.completed ? completedStyle: null}>
                    {itemProp.title}
                </span>
                <button onClick={handleEditing}>
                    <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
                </button>
                <button onClick={() => delTodo(itemProp.id)}>
                    <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
                </button>
        </div>
        <input
            type="text"
            // value={updateInput}
            ref = {editInputRef}
            defaultValue={itemProp.title}
            className={styles.textInput}
            style={editMode}
            // onChange={(e) => setUpdate(e.target.value, itemProp.id)}
            onKeyDown={handleUpdatedDone}
        />
    </li>
    );
};
export default TodoItem;

