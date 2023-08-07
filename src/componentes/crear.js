import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore';
import { db, subirArchivo } from "../firebaseConfig/firebase";

const Crear = () => {

  const [currentPage, setCurrentPage] = useState(1); // aqui seteo las paginas para mejorar la navegacion
  
  //seteo de datos DESCIPTIVOS para la locación
  const [nombre, setNombre] = useState('');
  const [ecosistema, setEcosistema] = useState('');
  const [descripcion, setDescripcion] = useState('');
  //const [imagen, setImagen] = useState(null);
  const [tags, setTags] = useState('');
  const [administrador, setAdministrador] = useState('');
  const [email, setEmail] = useState('');
  const [fono, setFono] = useState('');
  const [puplica_privada, setPublica_privada] = useState('');
  const [permiso, setPermiso] = useState(false);
  const [permiso_coste, setPermiso_coste] = useState('');

  //seteo de datos CAMINO, TERMINALES Y DISTANCIAS para la locaicón
  const [camino, setCamino] = useState('');
  const [estacionamiento, setEstacionamiento] = useState(false);
  const [esta_cap, setEsta_cap] = useState('');
  const [esta_distancia, setEsta_distancia] = useState('');
  const [santiago, setSantiago] = useState('');
  const [aeropuerto, setAeropuerto] = useState('');
  const [aero_distancia, setAero_distancia] = useState('');
  const [aerodromo, setAerodromo] = useState('');
  const [aerod_distancia, setAerod_distancia] = useState('');

  //seteo de datos de SERVICIOS BÁSICOS Y RED
  const [agua, setAgua] = useState(false);
  const [electricidad, setElectricidad] = useState(false);
  const [refugio, setRefugio] = useState(false);
  const [base_camp, setBase_camp] = useState(false);
  const [bodega, setBodega] = useState(false);
  const [internet, setInternet] = useState(false);
  const [movil, setMovil] = useState(false);
  const [satelite, setSatelite] = useState(false);

  //seteo de datos CLIMATICOS
  const [meses_mas_luz, setMeses_mas_luz] = useState('');
  const [meses_menos_luz, setMeses_menos_luz] = useState('');
  const [sol_mas_elevacion, setSol_mas_elevacion] = useState('');
  const [sol_menos_elevacion, setSol_menos_elevacion] = useState('');
  const [meses_mas_viento, setMeses_mas_viento] = useState('');
  const [meses_menos_viento, setMeses_menos_viento] = useState('');
  const [meses_mas_lluvia, setMeses_mas_lluvia] = useState('');
  const [meses_menos_lluvia, setMeses_menos_lluvia] = useState('');
  const [meses_mas_nieve, setMeses_mas_nieve] = useState('');
  const [meses_menos_nieve, setMeses_menos_nieve] = useState('');
  const [meses_mas_escarcha, setMeses_mas_escarcha] = useState('');
  const [meses_menos_escarcha, setMeses_menos_escarcha] = useState('');
  const [temp_agua, setTemp_agua] = useState('');

  //seteo de datos VESTUARIO
  const [vestuario_verano, setVestuario_verano] = useState('');
  const [vestuario_otoño, setVestuario_otoño] = useState('');
  const [vestuario_invierno, setVestuario_invierno] = useState('');
  const [vestuario_primavera, setVestuario_primavera] = useState('');

  const navigate = useNavigate();

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const locacionesCollection = collection(db, 'locacion');
  const store = async (e) => {
    e.preventDefault();
    await addDoc (locacionesCollection, {

      //almacenamiento de datos DESCRIPTIVOS 
      nombre:nombre,
      ecosistema:ecosistema,
      descripcion:descripcion,
      //imagen:imagen,
      tags:tags,
      administrador:administrador,
      email:email,
      fono:fono,
      puplica_privada:puplica_privada,
      permisos:permiso,
      permiso_coste:permiso_coste,

      //almacenamiento de datos CAMINO, TERMINALES Y DISTANCIAS
      camino:camino,
      estacionamiento:estacionamiento,
      esta_cap:esta_cap,
      esta_distancia:esta_distancia,
      santiago:santiago,
      aeropuerto:aeropuerto,
      aero_distancia:aero_distancia,
      aerodromo:aerodromo,
      aerod_distancia:aerod_distancia,

      //almacenamiento de datos SERVICIOS Y RED
      agua:agua,
      electricidad:electricidad,
      refugio:refugio,
      base_camp:base_camp,
      bodega:bodega,
      internet:internet,
      movil:movil,
      satelite:satelite,

      //almacenamiento de datos CLIMATICOS
      meses_mas_luz:meses_mas_luz,
      meses_menos_luz:meses_menos_luz,
      sol_mas_elevacion:sol_mas_elevacion,
      sol_menos_elevacion:sol_menos_elevacion,
      meses_mas_viento:meses_mas_viento,
      meses_menos_viento:meses_menos_viento,
      meses_mas_lluvia:meses_mas_lluvia,
      meses_menos_lluvia:meses_menos_lluvia,
      meses_mas_nieve:meses_mas_nieve,
      meses_menos_nieve:meses_menos_nieve,
      meses_mas_escarcha:meses_mas_escarcha,
      meses_menos_escarcha:meses_menos_escarcha,
      temp_agua:temp_agua,

      //almacenamiento de datos VESTUARIO 
      vestuario_verano:vestuario_verano,
      vestuario_otoño:vestuario_otoño,
      vestuario_invierno:vestuario_invierno,
      vestuario_primavera:vestuario_primavera

    })
    navigate('/');

  }
  return(
    <div className="container">
      {currentPage === 1 && (
        <div className="row">
          {/** DATOS DESCRIPTIVOS DE LA LOCACION */}
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
              <label className='form-label'> tipo de ecosistema de la locacion</label>
                <select value={ecosistema} onChange={(e) => setEcosistema(e.target.value)} className='form-select' aria-label='Default select example'>
                  <option selected>tipos de ecosistemas</option>
                  <option value='montaña'>Montaña</option>
                  <option value='fluvial'>Rio-Lago-Mar</option>
                  <option value='estepa'>Estepa</option>
                  <option value='bosque'>Bosque</option>
                  <option value='urbano'>Urbano</option>
                </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>descripcion</label>
                <textarea
                  value={descripcion}
                  onChange={ (e) => setDescripcion(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>FOTOGRAFIA DE LA LOCACION</label>
                <input
                  file={[0]}
                  onChange={ (e) => subirArchivo(e.target.file)}
                  type='file'
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
            <div className='mb-3'>
              <label className='form-label'>Caracter de la locacion</label>
                <select value={puplica_privada} onChange={(e) => setPublica_privada(e.target.value)} className='form-select' aria-label='Default select example'>
                  <option selected>¿La locascion es publica o privada?</option>
                  <option value='publica'>Publica</option>
                  <option value='privada'>Privada</option>
                </select>
            </div>
            <div className='form-check form-switch'>
              <label class="form-check-label" for="flexSwitchCheckDefault">¿Requiere permisos de locación?</label>
                <input
                  checked={permiso}
                  onChange={ (e) => setPermiso(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Coste del permiso de locación</label>
                <input
                  value={permiso_coste}
                  onChange={ (e) => setPermiso_coste(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
        </div>
      )}

      {currentPage === 2 && (
        <div className="row">
         {/** DATOS DE CAMINO, TERMINALES Y DISTANCIAS */}
         <div className='mb-3'>
              <label className='form-label'>Estado del camino hacia la locación</label>
                <input
                  value={camino}
                  onChange={ (e) => setCamino(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='form-check form-switch'>
              <label class="form-check-label" for="flexSwitchCheckDefault">¿Hay estacionamiento?
                <input
                  checked={estacionamiento}
                  onChange={ (e) => setEstacionamiento(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
              </label>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Capacidad del estacionamiento</label>
                <input
                  value={esta_cap}
                  onChange={ (e) => setEsta_cap(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Distancia entre el estacionamiento y el punto de locación</label>
                <input
                  value={esta_distancia}
                  onChange={ (e) => setEsta_distancia(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Distancia desde Santiago</label>
                <input
                  value={santiago}
                  onChange={ (e) => setSantiago(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>AEROPUERTO mas cercano</label>
                <input
                  value={aeropuerto}
                  onChange={ (e) => setAeropuerto(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Distancia desde este AEROPUERTO hasta la locación</label>
                <input
                  value={aero_distancia}
                  onChange={ (e) => setAero_distancia(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>AERODROMO mas cercano</label>
                <input
                  value={aerodromo}
                  onChange={ (e) => setAerodromo(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Distancia desde este AERODROMO hasta la locación</label>
                <input
                  value={aerod_distancia}
                  onChange={ (e) => setAerod_distancia(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            
            {/** DATOS DE SERVICIOS Y RED */}
            <div className='form-check form-switch'>
              <label class="form-check-label" for="flexSwitchCheckDefault">¿Acceso a agua potable?</label>
                <input
                  checked={agua}
                  onChange={ (e) => setAgua(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label class="form-check-label" for="flexSwitchCheckDefault">¿Acceso a servicio eléctrico?</label>
                <input
                  checked={electricidad}
                  onChange={ (e) => setElectricidad(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label class='form-check-label' for='flexSwitchCheckDefault'>¿Cuenta con refugio?</label>
                <input
                  checked={refugio}
                  onChange={ (e) => setRefugio(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label class='form-check-label' for='flexSwitchCheckDefault'>¿Factibilidad para base camp?</label>
                <input
                  checked={base_camp}
                  onChange={ (e) => setBase_camp(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label class='form-check-label' for='flexSwitchCheckDefault'>¿Cuenta con bodega?</label>
                <input
                  checked={bodega}
                  onChange={ (e) => setBodega(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label class='form-check-label' for='flexSwitchCheckDefault'>¿Hay acceso a internet en la locación?</label>
                <input
                  checked={internet}
                  onChange={ (e) => setInternet(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label className='form-check-label' for='flexSwitchCheckDefault'>¿Hay señal de telefono movil?</label>
                <input
                  checked={movil}
                  onChange={ (e) => setMovil(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label className='form-check-label' for='flexSwitchCheckDefault'>¿Hay cobertura satelital?</label>
                <input
                  checked={satelite}
                  onChange={ (e) => setSatelite(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
        </div>
      )}

      {currentPage === 3 && (
        <div className="row">
          {/** DATOS CLIMATICOS */}
          <div className='mb-3'>
              <label className='form-label'>Meses de mas luz</label>
                <input
                  value={meses_mas_luz}
                  onChange={ (e) => setMeses_mas_luz(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Meses de menos luz</label>
                <input
                  value={meses_menos_luz}
                  onChange={ (e) => setMeses_menos_luz(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Mes de mayor elvación del sol</label>
                <input
                  value={sol_mas_elevacion}
                  onChange={ (e) => setSol_mas_elevacion(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Mes de menor elvación del sol</label>
                <input
                  value={sol_menos_elevacion}
                  onChange={ (e) => setSol_menos_elevacion(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Meses de mas viento</label>
                <input
                  value={meses_mas_viento}
                  onChange={ (e) => setMeses_mas_viento(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Meses de menos viento</label>
                <input
                  value={meses_menos_viento}
                  onChange={ (e) => setMeses_menos_viento(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Meses de mas lluvia</label>
                <input
                  value={meses_mas_lluvia}
                  onChange={ (e) => setMeses_mas_lluvia(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Meses de menos lluvia</label>
                <input
                  value={meses_menos_lluvia}
                  onChange={ (e) => setMeses_menos_lluvia(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Meses de mas nieve</label>
                <input
                  value={meses_mas_nieve}
                  onChange={ (e) => setMeses_mas_nieve(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Meses de menos nieve</label>
                <input
                  value={meses_menos_nieve}
                  onChange={ (e) => setMeses_menos_nieve(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Meses de mas escarcha</label>
                <input
                  value={meses_mas_escarcha}
                  onChange={ (e) => setMeses_mas_escarcha(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Meses de menos escarcha</label>
                <input
                  value={meses_menos_escarcha}
                  onChange={ (e) => setMeses_menos_escarcha(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>temperatura del agua en : </label>
                <input
                  value={temp_agua}
                  onChange={ (e) => setTemp_agua(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            {/**DATOS DE VESTUARIO SEGUN LA TEMPORADA DE LA LOCACION */}
            <div className='mb-3'>
              <label className='form-label'>Recomendacion vestuario para verano</label>
                <input
                  value={vestuario_verano}
                  onChange={ (e) => setVestuario_verano(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Recomendacion vestuario para otoño</label>
                <input
                  value={vestuario_otoño}
                  onChange={ (e) => setVestuario_otoño(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Recomendacion vestuario para invierno</label>
                <input
                  value={vestuario_invierno}
                  onChange={ (e) => setVestuario_invierno(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Recomendacion vestuario para primavera</label>
                <input
                  value={vestuario_primavera}
                  onChange={ (e) => setVestuario_primavera(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
        </div>
      )}

      {currentPage === 1 && (
        <button onClick={nextPage} className="btn btn-primary">
          Siguiente
        </button>
      )}

      {currentPage > 1 && currentPage < 3 && (
        <>
          <button onClick={previousPage} className="btn btn-primary">
            Anterior
          </button>
          <button onClick={nextPage} className="btn btn-primary">
            Siguiente
          </button>
        </>
      )}

      {currentPage === 3 && (
        <>
          <button onClick={previousPage} className="btn btn-primary">
            Anterior
          </button>
          <button onClick={store} className="btn btn-primary">
            Crear
          </button>
        </>
      )}
    </div>
  )
}

export default Crear;