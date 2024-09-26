import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { addTodo, deleteTodo, getTodos, setTodos } from "./todoService";
import { Tarea } from "../types/Tarea";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Options: React.FC = () => {
  const [tareas, setTareas] = useState<Tarea[]>(getTodos());
  const [campos, setCampos] = useState<string[]>([]);
  const [nuevoCampo, setNuevoCampo] = useState<string>('');
  const [tareaEditando, setTareaEditando] = useState<Tarea | null>(null);

  useEffect(() => {
    setTareas(getTodos());
  }, []);

  const agregarCampo = () => {
    if (nuevoCampo.trim() !== '') {
      setCampos([...campos, nuevoCampo]);
      setNuevoCampo('');
      const nuevaTarea: Tarea = {
        id: Date.now(),
        title: nuevoCampo,
        complete: false,
      };
      addTodo(nuevaTarea);
    }
  };

  const eliminarCampo = (indice: number) => {
    const camposActualizados = [...campos];
    camposActualizados.splice(indice, 1);
    setCampos(camposActualizados);
  };

  const agregarTarea = () => {
    if (tareaEditando) {
      const nuevasTareas = tareas.map(t => (t.id === tareaEditando.id ? { ...t, title: nuevoCampo } : t));
      setTareas(nuevasTareas);
      setTodos(nuevasTareas);
      setTareaEditando(null);
    } else {
      const nuevaTarea: Tarea = {
        id: Date.now(),
        title: nuevoCampo,
        complete: false,
      };
      const nuevasTareas = [...tareas, nuevaTarea];
      setTareas(nuevasTareas);
      setTodos(nuevasTareas);
    }

    setNuevoCampo('');
  };

  const editarTarea = (tarea: Tarea) => {
    setNuevoCampo(tarea.title);
    setTareaEditando(tarea);
  };

  const eliminarTarea = (id: number) => {
    const nuevasTareas = deleteTodo(id);
    setTareas(nuevasTareas);
    setTareaEditando(null);
  };

  return (
        <div className="container text-white">
          <Header />
          <div className='input-group mb-3'>
            <input
              type="text"
              value={nuevoCampo}
              onChange={(e) => setNuevoCampo(e.target.value)}
              placeholder="Escribe aqui tu nueva tarea"
              className='form-control'
            />
            <button onClick={agregarTarea} type="button" className='btn btn-primary btn-sm float-right mr-2'>
              {tareaEditando ? <FontAwesomeIcon icon={faEdit} /> : 'Agregar Tarea'}
            </button>
          </div>
    
          <div>
            <h2>Tareas</h2>
            <ul className="list-unstyled">
              {tareas.map((tarea) => (
                <li key={tarea.id} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{tarea.title}</span>
                  <div>
                    <button onClick={() => editarTarea(tarea)} className='btn btn-success btn-sm mx-2'>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button onClick={() => eliminarTarea(tarea.id)} className='btn btn-danger btn-sm'>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
};

export default Options;