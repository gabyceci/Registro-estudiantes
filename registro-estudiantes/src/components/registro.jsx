import React, { useState } from "react";
import '../components/registro.css'

const Registro = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [carnet, setCarnet] = useState('');

    const addEstudiante = () => {
        if (nombre.trim() === '' || edad.trim() === '' || carnet.trim() === '') 
            
            return;

        setEstudiantes([...estudiantes, { id: Date.now(), nombre, edad, carnet }]);
        setNombre('');
        setEdad('');
        setCarnet('');
    };

    const deleteEstudiante = (id) => {
        setEstudiantes(estudiantes.filter(estudiante => estudiante.id !== id));
    };

    return (
        <>
        <br /><br /><br />
           <div className="card">
                <h1>Registro de Estudiantes</h1>
                <br />
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className=" text form-control"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="text form-control"
                        placeholder="Edad"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                    />
                </div>
                <br />
                <div className="form-floating">
                    <input
                        type="number"
                        className="text form-control"
                        placeholder="Carnet"
                        value={carnet}
                        onChange={(e) => setCarnet(e.target.value)}
                    />
                </div>
                <br />
                <button type="button" className="btn btn-primary" onClick={addEstudiante}>Agregar</button>

                <br />
                <h1>Listado:</h1>
                <ul>
                    {estudiantes.map((estudiante) => (
                        <li className="li" key={estudiante.id}>
                            {estudiante.nombre} | {estudiante.edad} años | Carnet: {estudiante.carnet}
                            <button 
                                onClick={() => deleteEstudiante(estudiante.id)}
                                style={{ marginLeft: '10px', backgroundColor: 'white', color: 'red', border: 'none', padding: '5px', cursor: 'pointer' }}>
                                X
                            </button>
                            <br /><br />
                        </li>
                    ))}
                </ul>
                </div>
        </>
    );
};

export default Registro;
