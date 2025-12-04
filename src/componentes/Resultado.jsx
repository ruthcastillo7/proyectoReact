import React from "react";

const Resultado = ({total, cantidad, plazo}) => {
    return (
        <div className="resultado">
            <h2>Cotización:</h2>
            <p>La cantidad solicitada es: S/. {cantidad}</p>
            <p>A pagar en: {plazo} Meses</p>
            <p>Su pago mensual es de: S/. {(total / plazo).toFixed(2)}</p>
            <p>Total a pagar: S/. {(total.toFixed(2))}</p>
        </div>
    );
}
export default Resultado;