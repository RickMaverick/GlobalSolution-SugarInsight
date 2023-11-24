import styles from './buttonHeader.module.css'

import { useRouter } from 'next/router';

export default function ButtonHeader({...props}){

    const router = useRouter();

    const redirectToProfile = ()=> {
        router.push('/Profile');
    }

    return(
        <button onClick={redirectToProfile} className={styles.button}></button>
    )
}