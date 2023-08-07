import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {collection, addDoc} from 'firebase/firestore';
import { db, subirArchivo } from "../firebaseConfig/firebase";
//import './estilos/servicio.css';

const Servicio = () => {

  const [currentPage, setCurrentPage] = useState(1);
  //seteo de datos DESCIPTIVOS para el servicio
  //const [fecha_inscripcion, setFecha_inscripcion] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [encargado, setEncargado] = useState(''); 
  const [rut, setRut] = useState('');
  const [email_encargado, setEmail_encargado] = useState('');
  const [telefono, setTelefono] = useState('');
  const [presencia_red, setPresencia_red] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [definicion_negocio, setDef_negocio] = useState('');
  const [antiguedad, setAntiguedad] = useState('');
  const [sello_calidad, setSello_calidad] = useState('');
  //const [imagen, setImagen] = useState(null);
  //const [img_referencia, setImg_referencia] = useState('');

  //seteo de datos OPERATIVOS del servicio
  const [camas_tipo_cantidad, setCama_tipo_cantidad] = useState(''); //REVISAR
  const [calidad, setCalidad] = useState('');
  const [internet, setInternet] = useState('');
  const [desayuno, setDesayuno] = useState('');
  const [almuerzo, setAlmuerzo] = useState('');
  const [cena, setCena] = useState('');
  const [otra_alimentacion, setOtra_alimentacion] = useState(false);
  const [servicio_limpieza, setServicio_limpieza] = useState(false);
  const [extras, setExtras] = useState(false);
  const [calificacion_clientes, setCalif_clientes] = useState('otro tipo de calificaciones');

  //seteo datos si tiene CAMPING
  const [camping_internet, setCamping_internet] = useState(false);
  const [camping_ducha, setCamping_ducha] = useState(false);
  const [camping_cocina, setCamping_cocina] = useState(false);
  const [camping_lavanderia, setCamping_lavanderia] = useState(false);
  const [camping_electricidad, setCamping_electricidad] = useState('');
  const [camping_estacionamiento, setCamping_estacionamiento] = useState('');
  const [camping_baño, setCamping_baño] = useState('');
  const [camping_valor, setCamping_valor] = useState('');
  const [camping_servicios_extra, setCamping_extra] = useState('');

  //seteo más datos OPERATIVOS del servicio
  const [idiomas, setIdiomas] = useState('');
  const [valor_noche, setValor_noche] = useState('');
  const [temporada_alta, setTemporada_altra] = useState('');
  const [capacidad_temp_alta, setCapacidad_temp_alta] = useState('');
  const [cuenta_bancaria, setCuenta_bancaria] = useState('');
  const [forma_pago, setForma_pago] = useState('');
  const [sistema_pago, setSistema_pago] = useState('');
  const [software, setSoftware] = useState('');
  const [pagar_10, setPagar_10] = useState('');

  const navigate = useNavigate();

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const serv_alojamientoCollection = collection(db, 'servicio_alojamiento');
  const store = async (e) => {
    e.preventDefault();
    await addDoc (serv_alojamientoCollection, {

      //almacenamiento de datos DESCRIPTIVOS 
      //fecha_inscripcion:fecha_inscripcion,
      email:email,
      empresa:empresa,
      encargado:encargado,
      rut:rut,
      email_encargado:email_encargado,
      telefono:telefono,
      presencia_red:presencia_red,
      direccion:direccion,
      ciudad:ciudad,
      definicion_negocio:definicion_negocio,
      antiguedad:antiguedad,
      sello_calidad:sello_calidad,
      //img_referencia:img_referencia,

      //almacenamiento de datos OPERATIVOS
      camas_tipo_cantidad:camas_tipo_cantidad,
      calidad:calidad,
      desayuno:desayuno,
      almuerzo:almuerzo,
      cena:cena,
      otra_alimentacion:otra_alimentacion,
      servicio_limpieza:servicio_limpieza,
      extras:extras,
      calificacion_clientes:calificacion_clientes,

      //almacenamiento de datos CAMPING
      camping_internet:camping_internet,
      camping_ducha:camping_ducha,
      camping_cocina:camping_cocina,
      camping_lavanderia:camping_lavanderia,
      camping_electricidad:camping_electricidad,
      camping_estacionamiento:camping_estacionamiento,
      camping_baño:camping_baño,
      camping_valor:camping_valor,
      camping_servicios_extra:camping_servicios_extra,

      //almacenamiento de datos OPERATIVOS Y COSTOS
      idiomas:idiomas,
      valor_noche:valor_noche,
      temporada_alta:temporada_alta,
      capacidad_temp_alta:capacidad_temp_alta,
      cuenta_bancaria:cuenta_bancaria,
      forma_pago:forma_pago,
      sistema_pago:sistema_pago,
      software:software,
      pagar_10:pagar_10

    })
    navigate('/');

  }
  return(
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      {currentPage === 1 && (
        <div className="div-descriptivos row">
          {/** DATOS DESCRIPTIVOS DEL SERVICIO*/}
            <div className='mb-3'>
              <label className='form-label'>INGRESE EL NOMBRE DE LA EMPRESA</label>
                <textarea
                  value={empresa}
                  onChange={ (e) => setEmpresa(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>E-MAIL DE LA EMPRESA</label>
                <input
                  value={email}
                  onChange={ (e) => setEmail(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label class="form-label">¿COMO SE DEFINE EL NEGOCIO?</label>
              <div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                <label class="form-check-label" for="inlineCheckbox1">HOTEL</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                <label class="form-check-label" for="inlineCheckbox2">LODGE</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                <label class="form-check-label" for="inlineCheckbox3">CABAÑAS </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                <label class="form-check-label" for="inlineCheckbox3">RESIDENCIAL </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                <label class="form-check-label" for="inlineCheckbox3">CAMPING </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                <label class="form-check-label" for="inlineCheckbox3">REFUGIO /ALBERGUE </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                <label class="form-check-label" for="inlineCheckbox3">GLAMPING </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                <label class="form-check-label" for="inlineCheckbox3">TINY HOUSE </label>
              </div>
              </div>
              <div className='row'>
                <div className='col'><label >OTRA DEFINICIÓN</label></div>
                <div className='col'>
                <input
                  value={definicion_negocio}
                  onChange={ (e) => setDef_negocio(e.target.value)}
                  type='text'
                  className='form-control'
                />
                </div>
              </div>
            </div>

            <div className='mb-3'>
              <label className='form-label'>NOMBRE DE ENCARGADO O ADMINITRADOR</label>
                <input
                  value={encargado}
                  onChange={ (e) => setEncargado(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>RUT</label>
                <input
                  value={rut}
                  onChange={ (e) => setRut(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>E-MAIL ENCARGADO</label>
                <input
                  value={email_encargado}
                  onChange={ (e) => setEmail_encargado(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>TELEFONO</label>
                <input
                  value={telefono}
                  onChange={ (e) => setTelefono(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>FOTO REFERENCIAL DEL NEGOCIO</label>
                <input
                  file={[0]}
                  onChange={ (e) => subirArchivo(e.target.file)}
                  type='file'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label class="form-label">¿TIENE PRESENCIA EN INTERNET?</label>
                <input
                  value={presencia_red}
                  onChange={ (e) => setPresencia_red(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>DIRECCION COMERCIAL</label>
                <input
                  value={direccion}
                  onChange={ (e) => setDireccion(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'> CIUDAD MAS CERCANA AL SERVICIO</label>
                <select value={ciudad} onChange={(e) => setCiudad(e.target.value)} className='form-select' aria-label='Default select example'>
                  <option selected>ciudades de la region ...</option>
                  <option value='coyhaique'>Coyhaique</option>
                  <option value='aysen'>Puerto Aysen</option>
                  <option value='chacabuco'>Puerto Chacabuco</option>
                  <option value='melinka'>Melinka</option>
                  <option value='chile_chico'>Chile Chico</option>
                  <option value='guadal'>Puerto Guadal</option>
                  <option value='tranquilo'>Puerto Rio Tranquilo</option>
                  <option value='cochrane'>Cochrane</option>
                  <option value='tortel'>Tortel</option>
                  <option value='balmaceda'>Balmaceda</option>
                  <option value='mañihuales'>Mañihuales</option>
                  <option value='la_junta'>La Junta</option>
                  <option value='puyuhuapi'>Puyuhuapi</option>
                </select>
            </div>
        </div>
      )}

      {currentPage === 2 && (
        <div className="div-calificaciones row">
         {/** CALIFICAIONES */}
            <div className='mb-3'>
              <label className='form-label'>ANTIGUEDAD DEL NEGOCIO</label>
                <input
                  value={antiguedad}
                  onChange={ (e) => setAntiguedad(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>CUENTA CON ALGUN SELLO DE CALIDAD</label>
                <input
                  value={sello_calidad}
                  onChange={ (e) => setSello_calidad(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'> CALIFICACIONES DE CLIENTES </label>
                <select value={calificacion_clientes} onChange={(e) => setCalif_clientes(e.target.value)} className='form-select' aria-label='Default select example'>
                  <option selected>calificaciones...</option>
                  <option value='coyhaique'>***** 5 estrellas</option>
                  <option value='aysen'>**** 4 estrellas</option>
                  <option value='chacabuco'>*** 3 estrellas</option>
                  <option value='melinka'>** 2 estrellas</option>
                </select>
                <input
                  value={calificacion_clientes}
                  onChange={ (e) => setCalif_clientes(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
          </div>
      )}

      {currentPage === 3 && (
        <div className="row">
          {/** SERVICIOS PRESENTES */}    
            <div className='mb-3'>
              <label className='form-label'>CAMAS Y CANTIDAD</label>
                <select value={camas_tipo_cantidad} onChange={(e) => setCama_tipo_cantidad(e.target.value)} className='form-select' aria-label='Default select example'>
                  <option selected>¿La locascion es publica o privada?</option>
                  <option value='1plaza'>1 plaza</option>
                  <option value='1_1/2_plaza'>1 1/2 plaza</option>
                  <option value='2plaza'>2 plaza</option>
                  <option value='king'>king</option>
                </select>
            </div>
            <div className='mb-3'>
              <label className='form-label'>CALIDAD DE LAS CAMAS</label>
                <input
                  value={calidad}
                  onChange={ (e) => setCalidad(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='form-check form-switch'>
              <label class='form-check-label' for='flexSwitchCheckDefault'>¿HAY ACCESO A INTERNET?</label>
                <input
                  checked={internet}
                  onChange={ (e) => setInternet(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label class="form-check-label" for="flexSwitchCheckDefault">¿SERVICIO DE LIMPIEZA?</label>
                <input
                  checked={servicio_limpieza}
                  onChange={ (e) => setServicio_limpieza(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label class='form-check-label' for='flexSwitchCheckDefault'>¿HAY DESAYUNO?</label>
                <input
                  checked={desayuno}
                  onChange={ (e) => setDesayuno(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label class='form-check-label' for='flexSwitchCheckDefault'>¿HAY ALMUERZO?</label>
                <input
                  checked={almuerzo}
                  onChange={ (e) => setAlmuerzo(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label class='form-check-label' for='flexSwitchCheckDefault'>¿HAY CENA?</label>
                <input
                  checked={cena}
                  onChange={ (e) => setCena(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>OTRO SERVICIO DE ALIMENTACIÓN</label>
                <input
                  value={otra_alimentacion}
                  onChange={ (e) => setOtra_alimentacion(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>DESCRIBA SERVICIOS COMPLEMENTARIOS</label>
                <input
                  value={extras}
                  onChange={ (e) => setExtras(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>MANEJAN OTROS IDIOMAS</label>
                <input
                  value={idiomas}
                  onChange={ (e) => setIdiomas(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            </div>
      )}

      {currentPage === 4 && (
        <div className="row">
          {/** SERVICIOS CAMPING */}    
            <div className='form-check form-switch'>
              <label class='form-check-label' for='flexSwitchCheckDefault'>¿HAY INTERNET EN EL CAMPING?</label>
                <input
                  checked={camping_internet}
                  onChange={ (e) => setCamping_internet(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label class='form-check-label' for='flexSwitchCheckDefault'>¿HAY DUCHA EN EL CAMPING?</label>
                <input
                  checked={camping_ducha}
                  onChange={ (e) => setCamping_ducha(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label className='form-check-label' for='flexSwitchCheckDefault'>¿HAY COCINA EN EL CAMPING?</label>
                <input
                  checked={camping_cocina}
                  onChange={ (e) => setCamping_cocina(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label className='form-check-label' for='flexSwitchCheckDefault'>¿HAY BAÑO EN EL CAMPING?</label>
                <input
                  checked={camping_baño}
                  onChange={ (e) => setCamping_baño(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label className='form-check-label' for='flexSwitchCheckDefault'>¿HAY ELECTRICIDAD EN EL CAMPING?</label>
                <input
                  checked={camping_electricidad}
                  onChange={ (e) => setCamping_electricidad(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label className='form-check-label' for='flexSwitchCheckDefault'>¿HAY LAVANDERIA EN EL CAMPING?</label>
                <input
                  checked={camping_lavanderia}
                  onChange={ (e) => setCamping_lavanderia(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label className='form-check-label' for='flexSwitchCheckDefault'>¿HAY ESTACIONAMIENTO EN EL CAMPING?</label>
                <input
                  checked={camping_estacionamiento}
                  onChange={ (e) => setCamping_estacionamiento(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='form-check form-switch'>
              <label className='form-check-label' for='flexSwitchCheckDefault'>¿HAY SERVICIOS EXTRAS EN EL CAMPING?</label>
                <input
                  checked={camping_servicios_extra}
                  onChange={ (e) => setCamping_extra(e.target.checked)}
                  type='checkbox'
                  className='form-check-input'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>VALOR DEL CAMPING</label>
                <input
                  value={camping_valor}
                  onChange={ (e) => setCamping_valor(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
        </div>
      )}
      {currentPage === 5 && (
        <div className="row">
          {/** TEMPORADA ALTA */}
          <div className='mb-3'>
              <label className='form-label'>TEMPORADA ALTA</label>
                <input
                  value={temporada_alta}
                  onChange={ (e) => setTemporada_altra(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>CAPACIDAD TEMPORADA ALTA</label>
                <input
                  value={capacidad_temp_alta}
                  onChange={ (e) => setCapacidad_temp_alta(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
          </div>
      )}

      {currentPage === 6 && (
        <div className="row">
          {/** COSTES Y MEDIOS DE PAGOS */}
            
            <div className='mb-3'>
              <label className='form-label'>VALOR DEL ALOJAMIENTO</label>
                <input
                  value={valor_noche}
                  onChange={ (e) => setValor_noche(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>CUENTA BANCARIA</label>
                <input
                  value={cuenta_bancaria}
                  onChange={ (e) => setCuenta_bancaria(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>FORMAS DE PAGO</label>
                <input
                  value={forma_pago}
                  onChange={ (e) => setForma_pago(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>SISTEMAS DE PAGO</label>
                <input
                  value={sistema_pago}
                  onChange={ (e) => setSistema_pago(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>¿CUENTAN CON ALGUN SOFTWARE DE GESTIÓN?</label>
                <input
                  value={software}
                  onChange={ (e) => setSoftware(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
            <div className='mb-3'>
              <label className='form-label'>¿ESTA DISPUESTO A PAGAR EL 10%?</label>
                <input
                  value={pagar_10}
                  onChange={ (e) => setPagar_10(e.target.value)}
                  type='text'
                  className='form-control'
                />
            </div>
        </div>
      )}

      {currentPage === 1 && (
        <div className="d-flex justify-content-end mb-3">
        <button onClick={nextPage} className="btn btn-primary">
          Siguiente
        </button>
        </div>
      )}

      {currentPage > 1 && currentPage < 6 && (
        <>
        <div className="d-flex justify-content-center mb-3">
          <button onClick={previousPage} className="btn btn-primary">
            Anterior
          </button>
          <button onClick={nextPage} className="btn btn-primary">
            Siguiente
          </button>
        </div>
        </>
      )}

      {currentPage === 6 && (
        <>
        <div className="d-flex justify-content-center mb-3">
          <button onClick={nextPage} className="btn btn-primary">
            Anterior
          </button>
          <button onClick={store} className="btn btn-primary">
            Crear
          </button>
        </div>
        </>
      )}
    </div>
  )
}

export default Servicio;