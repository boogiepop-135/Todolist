import React from 'react';

const Form = ({ handleChange, addTask, task }) => {
    return (
        <div className="mb-3">
            <form onSubmit={addTask} className="d-flex gap-2">
                <input
                    type="text"
                    value={task}
                    placeholder="Ingresa la tarea..."
                    onChange={handleChange}
                    className="form-control"
                />
                <button type="submit" className="btn btn-primary">Agregar Tarea</button>
            </form>
        </div>
    );
};

export { Form };