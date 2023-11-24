import Header from '@/components/header/header'
import styles from '../../styles/Profile.module.css'
import Footer from '@/components/footer/footer'
import { useEffect, useState } from 'react'

export default function Profile(){

    const [cadastro, setCadastro] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/SugarInsight2.0/rest/usuario/2`).then((resp)=>{
            return resp.json();
        }).then((resp)=> {
            setCadastro(resp);
            console.log(resp)
        }).catch((error)=> {
            console.log(error)
        });
    },[]);

    return(
        <>
        <Header/>
        <div className={styles.background}>
            <h2 className={styles.title}>Dados do usuário</h2>
            <div className={styles.cadastroDados}>
                <label className={styles.label}>CPF: </label>
                <p className={styles.userData}>
                {cadastro.cpf}
                </p>
                <label className={styles.label}>Sexo: </label>
                <p className={styles.userData}>
                {cadastro.sexo}
                </p>
                <label className={styles.label}>Idade: </label>
                <p className={styles.userData}>
                {cadastro.idade}
                </p>
                <label className={styles.label}>Peso: </label>
                <p className={styles.userData}>
                {cadastro.peso}
                </p>
                <label className={styles.label}>Altura: </label>
                <p className={styles.userData}>
                {cadastro.altura}
                </p>
                <label className={styles.label}>Resultado Predicao: </label>
                <p className={styles.userData}>
                {cadastro.resultadoPredicao}
                </p>
            </div>
        </div>
        <Footer/>
        </>
    )
}