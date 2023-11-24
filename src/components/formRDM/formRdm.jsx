import styles from './formRdm.module.css'

import ButtonForms from '../button-forms/buttonForms'
import { useEffect, useState } from 'react'

export default function FormRDM(){

    const [variaveis,  setVariaveis] = useState([])

    useEffect(()=>{
        fetch("http://PROJETODOKIKAEL/rest/atualizar").then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setVariaveis(resp)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])

    return(
        <>
        <form className={styles.formularioTeste}>
            <label className={styles.inputTitle}>Sexo</label>
            <input className={styles.input} type='text' placeholder='ex: Homem'></input>
            <label className={styles.inputTitle}>Idade</label>
            <input className={styles.input} type='text' placeholder='ex: 36'></input>
            <label className={styles.inputTitle}>Hipertensão</label>
            <input className={styles.input} type='text' placeholder='ex: Sim ou Não'></input>
            <label className={styles.inputTitle}>Fumante</label>
            <input className={styles.input} type='text' placeholder='ex: Sim ou Não'></input>
            <label className={styles.inputTitle}>IMC (Indice de Massa Corporal)</label>
            <input className={styles.input} type='text' placeholder='ex: Sim ou Não'></input>
            <label className={styles.inputTitle}>Atividade Física</label>
            <input className={styles.input} type='text' placeholder='ex: Sim ou Não'></input>
            <ButtonForms>Calcular</ButtonForms>
        </form>
        </>
    )
}