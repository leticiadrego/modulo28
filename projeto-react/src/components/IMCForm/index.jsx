import { useState } from "react";

import './IMCForm.css';

function IMCForm() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = (e) => {
        e.preventDefault();
        const alturaMetros = altura / 100;
        const imcCalculado = (peso / (alturaMetros * alturaMetros)).toFixed(2);
        setImc(imcCalculado);
        classificarIMC(imcCalculado);
    };

    const reset = () => {
        setPeso("");
        setAltura("");
        setImc("");
        setClassificacao("");
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 24.9) {
            setClassificacao('Peso normal');
        } else if (imc >= 25 && imc < 29.9) {
            setClassificacao('Sobrepeso');
        } else if (imc >= 30 && imc < 34.9) {
            setClassificacao('Obesidade grau 1');
        } else if (imc >= 35 && imc < 39.9) {
            setClassificacao('Obesidade grau 2');
        } else {
            setClassificacao('Obesidade grau 3');
        }
    };

    return (
        <div>
            <h1 className="titulo">Calculadora de IMC</h1>
            <form onSubmit={calcularIMC} className="form">
                <div>
                    <h2 className="form-titulo">Altura (cm)</h2>
                    <input 
                        className="input-form"
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <h2 className="form-titulo">Peso (kg)</h2>
                    <input 
                        className="input-form"
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        required
                    />
                </div>
                <div>
                <button
                className="form-button"
                onClick={(e) => {
                calcularImc();
                }}
                >
                Calcular
                </button>
                <button
                className="form-button"
                onClick={(e) => {
                reset();
                }}
                >
                Resetar
                </button>
                </div>
            </form>
            {imc && (
                <div className="resultado">
                    <h3>Seu IMC é: {imc}</h3>
                    <h4>Classificação: {classificacao}</h4>
                </div>
            )}
        </div>
    );
}

export default IMCForm;