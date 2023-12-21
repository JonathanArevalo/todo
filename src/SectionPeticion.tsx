import React from 'react'
import './InputBtn.css'
import { BtnAgregar } from './BtnAgregar'
import { BtnEliminar } from './BtnEliminar'

export const SectionPeticion = () => {
  return (
    <section className="card">
        <h1 className='titleSection'>
          MY TODO
        </h1>
        <section className='inputBtn'>
            <input type="text" className='inputSeleccion' placeholder='Escribe aqui para agregar' />
            <BtnAgregar/>
            <BtnEliminar/>
        </section>
        <section className='inputBtn'>
            <input type="text" className='inputSeleccion' placeholder='Escribe aqui para agregar' />
            <BtnAgregar/>
            <BtnEliminar/>
        </section>
        <section className='inputBtn'>
            <input type="text" className='inputSeleccion' placeholder='Escribe aqui para agregar' />
            <BtnAgregar/>
            <BtnEliminar/>
        </section>
    </section>
  )
}
