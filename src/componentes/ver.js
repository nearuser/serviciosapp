import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from "../firebaseConfig/firebase";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Ver = () => {

    //1.- configuramos los hooks
    const [locaciones, setLocaciones] = useState ( [] );

    //2.- referenciamos a la database de Firestore
    const locacionesCollection = collection(db,'locacion');

    //3.- creamos la funcion para mostrar todos los documentos
    const getLocaciones = async () => {
       const data = await getDocs(locacionesCollection);
       //console.log(datos.docs)
       setLocaciones(
            data.docs.map( (doc) => ( {...doc.data(),id:doc.id} ))
       )
       console.log(locaciones);
    } 

    //4.- creamos una funcion para eliminar un documento
    const deleteLocacion = async (id) => {
        const locacionDoc = doc(db, 'locacion', id)
        await deleteDoc(locacionDoc)
        getLocaciones();
    }

    //5.- creamos una funcion de confirmacion para sweetAlert
    const confirmarDelete = (id) => {
      MySwal.fire({
        title: 'Estas seguro?',
        text: "no se podrá revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borrarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
          deleteLocacion(id)
          Swal.fire(
            'Borrado!',
            'La locacion a sido borrada de la base de datos.',
            'success'
          )
        }
      })
    }

    // 6.- usamos useEffect
    useEffect( () => {
        getLocaciones()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    // 7.- retornamos la vista de nuestro componente
    return(
        <>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                {/**<div className='d-grid gap-2'>
                <Link to='/crear' className='btn btn-secondary mt-2 mb-2'>CREAR LOCACION</Link>
                </div>*/}
                <div className='d-grid gap-2'>
                <Link to='/servicio' className='btn btn-secondary mt-2 mb-2'>CREAR SERVICIO DE ALOJAMIENTO</Link>
                </div>

                <table className='table table-dark table-hover'>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Ecosistema</th>
                      <th>tags</th>
                      <th>Administrador</th>
                      <th>E-mail</th>
                      <th>Fono</th>
                      <th>camino</th>
                      <th>acciones</th>
                    </tr>
                  </thead>

                  <tbody>
                    { locaciones.map( (locaciones) =>(
                      <tr key={locaciones.id}>
                        <td>{locaciones.nombre}</td>
                        <td>{locaciones.ecosistema}</td>
                        <td>{locaciones.tags}</td>
                        <td>{locaciones.administrador}</td>
                        <td>{locaciones.email}</td>
                        <td>{locaciones.fono}</td>
                        <td>{locaciones.camino}</td>
                        <td>
                          <Link to={`/editar/${locaciones.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                          <button onClick={() => confirmarDelete(locaciones.id)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>  
        </>
        
    )
}

export default Ver;