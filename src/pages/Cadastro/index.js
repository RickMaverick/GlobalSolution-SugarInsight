import Link from 'next/link'
import styles from '../../styles/Cadastro.module.css'

import ButtonHeader from '@/components/button-header/buttonHeader'
import LoginCard from "@/components/loginCard/loginCard"
import Input from '@/components/input/input'
import Button from '@/components/button/button'
import Footer from '@/components/footer/footer'

export default function CadastroPage(){
    return(
        <>
        <div className={styles.header}>
            <h1 className={styles.title}>SugarInsight</h1>
            <ButtonHeader>Login</ButtonHeader>
        </div>
        <div className={styles.background}>
        <LoginCard title='Crie sua conta'>
            <form className={styles.form}>
            <Input type='text' placeholder='CPF'/>
            <Input type='password' placeholder='Senha'/>
            <Button>Criar</Button>
            <Link className={styles.link} href='/Login'>Já possui uma conta?</Link>
            </form>
        </LoginCard>
        </div>
        <Footer/>
        </>
    )
}