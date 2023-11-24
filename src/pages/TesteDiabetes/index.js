import styles from '../../styles/TesteDiabetes.module.css'

import Header from "@/components/header/header"
import FormRDM from '@/components/formRDM/formRdm'
import Footer from '@/components/footer/footer'

export default function TesteDiabetes(){
    return(
        <>
        <Header/>
        <div className={styles.background}>
            <div className={styles.contentBox}>
                <h2 className={styles.title}>Teste de Risco de Diabetes Mellitus II</h2>
                <p className={styles.text}>Nosso teste utiliza de um algoritmo de I.A. treinado com uma base de dados para predição de diabetes.</p>
                <p className={styles.text}>Lembramos que esta é apenas uma ferramenta, e que NÃO substitui o acompanhamento e diagnóstico feito por um médico e/ou nutricionista.</p>
            </div>
            <FormRDM/>
        </div>
        <Footer/>
        </>
    )
}