import styles from './buttonForms.module.css'

export default function ButtonForms({children, ...props}){
    return(
        <>
        <button className={styles.button}>{children}</button>
        </>
    )
}