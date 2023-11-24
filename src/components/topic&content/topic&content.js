import styles from './topic&content.module.css'

export default function TopicContentHome(){
    return(
        <div className={styles.topicContent}>
            <h3 className={styles.title}>Qual a nossa causa?</h3>
            <p className={styles.text}> No contexto mundial, a prevalência do diabetes tem aumentado significativamente, sendo uma preocupação de saúde global. O diabetes tipo 2, associado a fatores como estilo de vida e obesidade, representa a forma mais comum da doença. No Brasil, sua incidência vem crescendo, impulsionada por mudanças no padrão de vida e alimentação. Essa epidemia gera impactos socioeconômicos e destaca a necessidade de estratégias eficazes de prevenção e controle para mitigar seus efeitos na população brasileira.</p>
            <p className={styles.text}>Nossa missão é capacitar as pessoas com conhecimento para gerenciar e compreender melhor sua condição de saúde.</p>
        </div>
    )
}