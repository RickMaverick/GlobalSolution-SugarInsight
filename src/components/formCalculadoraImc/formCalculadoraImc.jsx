import styles from './calculadoraImc.module.css'

import { useRef, useState, useEffect } from 'react';
import ButtonForms from '../button-forms/buttonForms'

export default function FormCalculadoraImc(){
    const [result, setResult] = useState(null);
    
    const formRef = useRef(null);
    const pesoRef = useRef(null);
    const alturaRef = useRef(null);

    const regexPeso = /^[0-9]+([.][0-9]+)?$/;
    const regexAltura = /^[0-9]+([.][0-9]+)?$/;

    useEffect(() => {
        const storedResult = sessionStorage.getItem('imcResult');
        if (storedResult) {
          setResult(storedResult);
        }
      }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (pesoRef.current.value === '') {
            alert("Por favor, preencha o campo Peso.");
            return;
          }

        if (!pesoRef.current.value.match(regexPeso)) {
          alert("Por favor, verifique se preencheu o campo Peso adequadamente. Formato 'XX.XX'");
          return;
        }
    
        if (alturaRef.current.value === '') {
            alert("Por favor, preencha o campo Altura.");
            return;
          }

        if (!alturaRef.current.value.match(regexAltura)) {
          alert("Por favor, verifique se escreveu a Altura no formato 'X.XX'.");
          return;
        }
    
        const peso = parseFloat(pesoRef.current.value);
        const altura = parseFloat(alturaRef.current.value);

        const resultado = (peso / (altura * altura)).toFixed(2);

        setResult(resultado);

        sessionStorage.setItem('imcResult', resultado);
    
        formRef.current.submit();
      };

      //ADICIONAR POST NO BANCO DE DADOS PARA RESULTADO DO IMC

    let definicaoIMC = '';
    
    if (result !== null) {
        if (parseFloat(result) < 18.5) {
            definicaoIMC = `IMC: ${result} -> Classificação: Baixo Peso`;
        } else if (parseFloat(result) <= 24.9) {
            definicaoIMC = `IMC: ${result} -> Classificação: Peso Saudável`;
        } else if (parseFloat(result) <= 29.9) {
            definicaoIMC = `IMC: ${result} -> Classificação: Sobrepeso`;
        } else if (parseFloat(result) <= 34.9) {
            definicaoIMC = `IMC: ${result} -> Classificação: Obesidade Moderada`;
        } else if (parseFloat(result) <= 39.9) {
            definicaoIMC = `IMC ${result} -> Classificação: Obesidade Severa`;
        } else {
            definicaoIMC = `IMC ${result} -> Classificação Obesidade Muito Severa`;
        }
    }

    return(
        <>
         <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>Peso (em Kg)</label>
            <input ref={pesoRef} className={styles.input} type='text' placeholder='ex: 70.55'></input>
            <label className={styles.label}>Altura (em Metros)</label>
            <input ref={alturaRef} className={styles.input} type='text' placeholder='ex: 1.80'></input>
                <ButtonForms>Calcular IMC</ButtonForms>
            {definicaoIMC && <p className={styles.definicaoIMC}>{definicaoIMC}</p>}
         </form>
        </>
    )
}