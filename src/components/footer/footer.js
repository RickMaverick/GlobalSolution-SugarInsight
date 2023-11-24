import Link from 'next/link'
import styles from './footer.module.css'



export default function Footer(...props){
    return(
        <div className={styles.footer}>
            <div className={styles.footerCategory}>
                <h3 className={styles.footerTitle}>Contato</h3>
                <p className={styles.footerText}>trymfproject@gmail.com</p>
            </div>
            <div className={styles.footerCategory}>
                <h3 className={styles.footerTitle}>Referências</h3>
                <Link className={styles.footerText} href="https://drive.google.com/drive/u/0/folders/1QfGJfHy8KpjKm6hkN_eUYKar_ZK4QORl">nosso drive</Link>
            </div>
            <div className={styles.footerLinkedin}>
                <div className={styles.icon}/>
                <Link className={styles.footerTitle} href="#">LinkedIn</Link>
            </div>
            <div className={styles.footerCategory}>
                <h3 className={styles.footerTitle}>Membros da Equipe</h3>
                <div className={styles.footerNames}>
                    <p className={styles.footerNamesText}>Ricardo Temple RM99721</p>
                    <p className={styles.footerNamesText}>Michael Bernardi RM99409</p>
                    <p className={styles.footerNamesText}>Thabata Orbetelli RM 550268</p>
                    <p className={styles.footerNamesText}>Yago Ruksenas RM97827</p>
                    <p className={styles.footerNamesText}>Mateus Viana RM99530</p>
                </div>
            </div>
        </div>
    )
}