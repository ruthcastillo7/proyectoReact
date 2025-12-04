import React, { useState } from 'react';
import { calcularTotal} from '../helpers';
import Resultado from './Resultado';

//Este código define un componente funcional de React llamado Formulario, que recibe varias props relacionadas con un cotizador de préstamos
const Formulario = ({cantidad, setCantidad, plazo, setPlazo, setTotal}) => {
// Este estado sirve para mostrar un mensaje de error si el usuario intenta enviar el formulario sin llenar los campos.
    const [error, setError] = useState(false);
// e.preventDefault(): Evita que el formulario recargue la página cuando se hace submit.
    const calcularPrestamo = e => {
        e.preventDefault();
        // Validación de datos: Si la cantidad es 0 o el plazo está vacío: (Activa el estado de error: setError(true)) , (Hace un return temprano para NO continuar con el cálculo.)
        if (cantidad === 0 || plazo ==="") {
            setError(true);
            return;
        }
        // Limpieza del error: Si pasó la validación, asegura que no haya mensaje de error activo.
        setError(false);
        // Cálculo del préstamo: Llama a una función externa calcularTotal(cantidad, plazo) que (probablemente) devuelve: intereses, monto total a pagar y cuota mensual segun funciondefiida.  Guarda el resultado en el estado padre usando setTotal(total).
        const total = calcularTotal(cantidad, plazo);
        setTotal(total);
        //console.log(total);
    }
     

    return ( 
        <>
            <form onSubmit={ calcularPrestamo }>
                <div className="column">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input type="number" placeholder='Ej: 3000'
                            onChange={(e) => setCantidad(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Plazo para pagar</label>
                        <select onChange={(e) => setPlazo(e.target.value)}>
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                </div>
                <div className="btnSubmint">
                    <button type="submint" value="Calcular" onClick={Resultado}>Calcular</button>
                </div>
            </form>
            {(error) ? <p className='error'> 🚨Todos los campos son obligatorios</p> : ""}
            
        </>
    );
}

export default Formulario;