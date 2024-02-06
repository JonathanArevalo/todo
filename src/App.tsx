// import { useState } from 'react'
// import { Header } from './Header'
// import { SectionPeticion } from './SectionPeticion'

// function App() {
//  const [count, setCount] = useState(0)

//   return (
//     <>
//       <Header/>
//       <h2 className='titleEmpresa'> Indra</h2>
//       <SectionPeticion/>
      
//       <footer className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </footer>
//     </>
//   )
// }

// export default App


import { useState } from 'react';
import { Header } from './Header';
// import { SectionPeticion } from './SectionPeticion';

function App() {
    const [count, setCount] = useState(0);

    const form = document.getElementById('formAgregar') as HTMLFormElement;
    const lista = document.getElementById('items') as HTMLUListElement;
    const filtro = document.getElementById('filtro') as HTMLInputElement;

    // Evento submit del formulario
    form.addEventListener('submit', agregarItem);
    // Evento click de la lista
    lista.addEventListener('click', eliminarItem);
    // Evento del teclado en el campo de filtro
    filtro.addEventListener('keyup', filtrarItems);

    // Funcion para agregar un Item a la lista
    function agregarItem(e: Event) {
        e.preventDefault();
        const newItem = (document.getElementById('item') as HTMLInputElement).value;

        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newItem));

        const botonDel = document.createElement('button');
        botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
        botonDel.appendChild(document.createTextNode('X'));

        li.appendChild(botonDel);
        lista.appendChild(li);
    }

    // Eliminar un elemento a la lista
    function eliminarItem(e: Event) {
        if ((e.target as HTMLElement).classList.contains('eliminar')) {
            if (window.confirm('¿Seguro deseas eliminar el elemento seleccionado?')) {
                const li = (e.target as HTMLElement).parentElement;
                if (li) {
                    lista.removeChild(li);
                }
            }
        }
    }

    // Funcion para filtrar elementos de la lista
    function filtrarItems(e: Event) {
        const texto = (e.target as HTMLInputElement).value.toLowerCase();
        const items = lista.getElementsByTagName('li');
        Array.from(items).forEach(function (item) {
            const itemNombre = item.firstChild?.textContent || '';
            if (itemNombre.toLowerCase().indexOf(texto) !== -1) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // return (
    //     <>
    //         <Header />
    //         <h2 className='titleEmpresa'> Indra</h2>
    //         <SectionPeticion />

    //         <footer className="read-the-docs">
    //             Click on the Vite and React logos to learn more
    //         </footer>
    //     </>
    // );
}

export default App;



