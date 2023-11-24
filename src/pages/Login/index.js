import Link from 'next/link'
import styles from '../../styles/Login.module.css'

import ButtonHeader from '@/components/button-header/buttonHeader'
import LoginCard from "@/components/loginCard/loginCard"
import Input from '@/components/input/input'
import Button from '@/components/button/button'
import Footer from '@/components/footer/footer'

export default function LoginPage(){
    return(
        <>
        <div className={styles.header}>
            <h1 className={styles.title}>SugarInsight</h1>
            <ButtonHeader>Crie uma conta</ButtonHeader>
        </div>
        <div className={styles.background}>
            <LoginCard title="Login">
                <form className={styles.form}>
                <Input type='text' placeholder='CPF'/>
                <Input type='password' placeholder='Senha'/>
                <Button>Entrar</Button>
                <Link className={styles.link} href='/Cadastro'>Ainda não fez sua conta?</Link>
                </form>
            </LoginCard>
        </div>
        <Footer/>
        </>
    )
}