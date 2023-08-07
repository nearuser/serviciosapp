import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getDoc, updateDoc, doc} from 'firebase/firestore';
import { db } from "../firebaseConfig/firebase";


const Editar = () => {

  const [nombre, setNombre] = useState('');
  const [ecosistema, setEcosistema] = useState('');
  const [tags, setTags] = useState('');
  const [administrador, setAdministrador] = useState('');
  const [email, setEmail] = useState('');
  const [fono, setFono] = useState('');

  const navigate = useNavigate();
  const {id} = useParams();

  const update = async (e) => {
    e.preventDefault()
    const locacion = doc(db, 'locacion', id)
    const data = {
        nombre:nombre,
        ecosistema:ecosistema,
        tags:tags,
        administrador:administrador,
        email:email,
        fono:fono
    }
    await updateDoc(locacion, data)
    navigate('/');
  }

  const getLocacionesById = async (e) => {
    const locacion = await getDoc ( doc(db,'locacion',id))
    if(locacion.exists()) {
        setNombre(locacion.data().nombre)
        setEcosistema(locacion.data().ecosistema)
        setTags(locacion.data().tags)
        setAdministrador(locacion.data().administrador)
        setEmail(locacion.data().email)
        setFono(locacion.data().fono)
    }else{
        console.log("la locacion no existe");
    }
  }

  useEffect ( () => {
    getLocacionesById(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 
  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>EDITAR ESTA LOCACIÓN</h1>

          <form onSubmit={update}>
            <div className='mb-3'>
              <label className='form-label'>nombre</label>
                <input
                  value={nombre}
                  onChange={ (e) => setNombre(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>escosistema</label>
                <input
                  value={ecosistema}
                  onChange={ (e) => setEcosistema(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>tags</label>
                <input
                  value={tags}
                  onChange={ (e) => setTags(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>administrador</label>
                <input
                  value={administrador}
                  onChange={ (e) => setAdministrador(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>email</label>
                <input
                  value={email}
                  onChange={ (e) => setEmail(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>fono</label>
                <input
                  value={fono}
                  onChange={ (e) => setFono(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Editar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Editar;