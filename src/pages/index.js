import styles from '../styles/Home.module.css'

import Header from "@/components/header/header"
import TopicContentHome from '@/components/topic&content/topic&content'
import Footer from '@/components/footer/footer'
import Slogan from '@/components/slogan/slogan'
import ButtonTesteRdm from '@/components/button-TesteRDM/buttonTesteRdm'

export default function Home(){

    return(
        <>
        <Header/>
        <div className={styles.background}>
                <h2 className={styles.homeTitle}>Predição do Risco de Diabetes Mellitus II <br/>
                através de Inteligência Artificial</h2>
            <div className={styles.faixa}>
                <p className={styles.text}>A SugarInsight é uma inovadora empresa de tecnologia dedicada a fornecer informações essenciais sobre o diabetes.</p>
                <div className={styles.box}>
                    <h4 className={styles.text}>Quero saber meu risco de diabetes</h4>
                    <ButtonTesteRdm>Teste de Risco de Diabetes</ButtonTesteRdm>
                </div>
            </div>
            <TopicContentHome/>
            <Slogan/>
        </div>
        <Footer/>
        </>
    )
}