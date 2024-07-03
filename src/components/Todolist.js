
import { useState } from 'react';

const Todolist = () => {
    let [task, setTask] = useState("");
    let [taskArray, setTaskArray] = useState([]);

    let clickHandler = () => {
        if (task.trim() !== "") {
            setTaskArray([...taskArray, task]);
            setTask("");
        }
    };

    let onChangeHandler = (event) => {
        setTask(event.target.value);
    };

    let onKeyPressHandler = (event) => {
        if (event.key === 'Enter') {
            clickHandler();
        }
    };

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">To-Do List</h2>
                        <div className="mb-3 t12" >
                            <label htmlFor="taskInput" className="form-label">Task</label><br/><br/><br/>
                            <input
                                type="text"
                                className="form-control"
                                id="taskInput"
                                placeholder="Enter your task"
                                value={task}
                                onChange={onChangeHandler}
                                onKeyPress={onKeyPressHandler}
                            />
                        </div>
                        <button onClick={clickHandler}>Add Task</button>
                        <ol>
                            {taskArray.map((elem, index) => (
                                <li key={index}>{index + 1}. {elem}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todolist;