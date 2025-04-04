import React, { useState } from 'react';
import { Task } from './Task';
import { Form } from './Form';

function Todolist() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const addTask = (e) => {
        e.preventDefault();
        if (task.trim() === '') {
            alert('Debes agregar algo');
            return;
        }

        const newTask = {
            id: Date.now(),
            task,
            completed: false,
        };

        setTasks([...tasks, newTask]); // Agrega la nueva tarea al final
        setTask('');
    };

    const deleteTask = (id) => {
        const currentTasks = tasks.filter(task => task.id !== id);
        setTasks(currentTasks);
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="container mt-5">
            <h2>Lista de Tareas</h2>
            <Form
                handleChange={handleChange}
                addTask={addTask}
                task={task}
            />
            {tasks.length > 0 && (
                <button onClick={() => setTasks([])} className="btn btn-warning mb-3">
                    Vaciar Tareas
                </button>
            )}
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                />
            ))}
        </div>
    );
}

export default Todolist;