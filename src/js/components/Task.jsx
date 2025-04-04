import React from 'react';

const Task = ({ task, deleteTask, toggleComplete }) => {
    return (
        <div className={task.completed ? 'containerTask containerTaskCompleted' : 'containerTask'}>
            <h2 className={task.completed ? 'completed' : 'noCompleted'}>{task.task}</h2>
            <button
                id="complete"
                onClick={() => toggleComplete(task.id)}
                className="btn btn-secondary me-2"
            >
                {task.completed ? 'Marcar como No Completada' : 'Marcar como Completada'}
            </button>
            <button
                onClick={() => deleteTask(task.id)}
                id="delete"
                className="btn btn-danger"
            >
                Eliminar
            </button>
        </div>
    );
};

export { Task };