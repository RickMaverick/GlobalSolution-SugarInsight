import Header from '@/components/header/header'
import styles from '../../styles/Profile.module.css'
import Footer from '@/components/footer/footer'
import { useEffect, useState } from 'react'

export default function Profile(){

    const [cadastro, setCadastro] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/cadastro`).then((resp)=>{
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
                {cadastro.map((dados) => (
                    <span key={dados.id}>{dados.cpf}</span>
                ))}
                </p>
                <label className={styles.label}>Sexo: </label>
                <p className={styles.userData}>
                {cadastro.map((dados) => (
                    <span key={dados.id}>{dados.sexo}</span>
                ))}
                </p>
                <label className={styles.label}>Peso: </label>
                <p className={styles.userData}>
                {cadastro.map((dados) => (
                    <span key={dados.id}>{dados.peso}</span>
                ))}
                </p>
                <label className={styles.label}>Altura: </label>
                <p className={styles.userData}>
                {cadastro.map((dados) => (
                    <span key={dados.id}>{dados.altura}</span>
                ))}
                </p>
                <label className={styles.label}>Idade: </label>
                <p className={styles.userData}>
                {cadastro.map((dados) => (
                    <span key={dados.id}>{dados.idade}</span>
                ))}
                </p>
                <label className={styles.label}>IMC: </label>
                <p className={styles.userData}>
                {cadastro.map((dados) => (
                    <span key={dados.id}>{dados.resultado_imc}</span>
                ))}
                </p>
                <label className={styles.label}>Resultado do Teste RDM: </label>
                <p className={styles.userData}>
                {cadastro.map((dados) => (
                    <span key={dados.id}>{dados.resultado_predicao}</span>
                ))}
                </p>
            </div>
        </div>
        <Footer/>
        </>
    )
}