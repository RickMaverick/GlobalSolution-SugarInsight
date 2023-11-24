import styles from '../../styles/CalculadoraImc.module.css'

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import FormCalculadoraImc from '@/components/formCalculadoraImc/formCalculadoraImc'

export default function CalculadoraImc(){
    return(
        <>
        <Header/>
        <div className={styles.background}>
            <div className={styles.contentBox}>
                <h2 className={styles.title}>Calculadora de IMC<br/>
                (Índice de Massa Corporal)</h2>
                <p className={styles.text}>O IMC (Indice de Massa Corporal)
                é um dos indicadores de saúde mais utilizados do mundo.
                <br/>Seu resultado reflete se seu peso está dentro da faixa determinada de uma pessoa saudável, desnutrição,  subnutrição, sobrepeso e obesidade.</p>
                <p className={styles.text}>Lembramos que esta é apenas uma ferramenta, e que NÃO substitui o acompanhamento e diagnóstico feito por um médico e/ou nutricionista.</p>
            </div>
            <FormCalculadoraImc/>
        </div>
        <Footer/>
        </>
    )
}