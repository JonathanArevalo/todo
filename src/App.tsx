import React, { useState } from 'react';
import { Header } from './components/Header';
// import Section from "./components/Section";
import { getTodos } from "./service/todoService";
import { TareaA } from "./types/Tarea";

import "../src/styles/style.scss";

const todos = JSON.parse(sessionStorage.getItem("todos")!) || sessionStorage.setItem("todos", JSON.stringify(getTodos()));

interface Campo {
  id: number;
  valor: string;
}

const App: React.FC = () => {
  const [tareas, setTareas] = useState<TareaA[]>(todos);
  const [campos, setCampos] = useState<Campo[]>([]);
  const [nuevoCampo, setNuevoCampo] = useState<string>('');

  const agregarCampo = () => {
    if (nuevoCampo.trim() !== '') {
      const nuevoCampoObj: Campo = {
        id: Date.now(),
        valor: nuevoCampo,
      };

      setCampos([...campos, nuevoCampoObj]);
      setNuevoCampo('');
    }
  };

  const eliminarCampo = (id: number) => {
    const camposActualizados = campos.filter((campo) => campo.id !== id);
    setCampos(camposActualizados);
  };

  const deletTask = (id: number) => {
    const deletT = tareas.filter(tarea => tarea.id !== id);
    setTareas(deletT);
    sessionStorage.setItem("todos", JSON.stringify(deletT));
  };

  return (
    <>
      <div className="container text-white">
      <Header >
      </Header>
        <div className='input-group mb-3'>
          <input
            type="text"
            value={nuevoCampo}
            onChange={(e) => setNuevoCampo(e.target.value)}
            placeholder="Nuevo Campo"
            className='form-control'
          />
          <button onClick={agregarCampo} type="button" className='btn btn-success btn-sm float-right'>Agregar</button>
        </div>

        <div>
          {campos.map((campo) => (
            <div key={campo.id} className='input-group mb-2'>
              <input type="text" value={campo.valor} readOnly className='form-control border-0 bacground bg-transparent text-white '/>
              <button onClick={() => eliminarCampo(campo.id)} type='button' className='btn btn-danger btn-sm float-right eliminar'>X</button>
            </div>
          ))}
        </div>
      </div>
        {/* <Section buttonTask="X" tareas={tareas} deletTask={deletTask} />       */}
    </>
  );
};

export default App;
