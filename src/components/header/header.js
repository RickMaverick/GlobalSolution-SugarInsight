import Link from 'next/link'
import styles from './header.module.css'
import ButtonHeader from '../button-header/buttonHeader'

export default function Header(){
    return(
         <div className={styles.header}>
            <h1 className={styles.title}>SugarInsight</h1>
            <ul className={styles.headerLista}>
                <li><Link className={styles.link} href='/'>Home</Link></li>
                <li><Link className={styles.link} href='/TesteDiabetes'>Teste de RDM</Link></li>
                <li><Link className={styles.link} href='/CalculadoraIMC'>Calculadora de IMC</Link></li>
                <li><Link className={styles.link} href='Informacoes'>Informações</Link></li>
                <li><ButtonHeader/></li>
            </ul>
        </div>
    )
}