import styles from './buttonTesteRdm.module.css'

import { useRouter } from 'next/router';

export default function ButtonTesteRdm({children, ...props}){

    const router = useRouter();

    const redirectToTesteDiabetes = () => {
        router.push('/TesteDiabetes');
    };

    return(
        <>
        <button onClick={redirectToTesteDiabetes} className={styles.button}>{children}</button>
        </>
    )
}