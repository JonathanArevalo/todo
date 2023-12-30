import './InputBtn.css'
import { BtnAgregar } from './BtnAgregar'
import { BtnEliminar } from './BtnEliminar'

export const SectionPeticion = () => {
  return (
    <section className="card">
        <h1 className='titleSection'>
          MY TODO
        </h1>
        <section className='inputBtn inputBtnFlex'>
            <div className='inputBtn  sel'>
              <input type="checkbox" className='check'/>
              <input type="text" className='inputSeleccion' placeholder='Escribe aqui para agregar' />
            </div>
            <div className='ubiBtn'>
              <BtnAgregar/>
              <BtnEliminar/>
            </div>
        </section>
        <section className='inputBtn inputBtnFlex'>
            <div className='inputBtn  sel'>
              <input type="checkbox" className='check'/>
              <input type="text" className='inputSeleccion' placeholder='Escribe aqui para agregar' />
            </div>
            <div className='ubiBtn'>
              <BtnAgregar/>
              <BtnEliminar/>
            </div>
        </section>
        <section className='inputBtn inputBtnFlex'>
            <div className='inputBtn  sel'>
              <input type="checkbox" className='check'/>
              <input type="text" className='inputSeleccion' placeholder='Escribe aqui para agregar' />
            </div>
            <div className='ubiBtn'>
              <BtnAgregar/>
              <BtnEliminar/>
            </div>
        </section>
        <section className='inputBtn inputBtnFlex'>
            <div className='inputBtn  sel'>
              <input type="checkbox" className='check'/>
              <input type="text" className='inputSeleccion' placeholder='Escribe aqui para agregar' />
            </div>
            <div className='ubiBtn'>
              <BtnAgregar/>
              <BtnEliminar/>
            </div>
        </section>
    </section>
  )
}
