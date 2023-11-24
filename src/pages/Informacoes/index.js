import styles from '../../styles/Informacoes.module.css'

import Header from '@/components/header/header'
import Footer from '../../components/footer/footer'

export default function InformacoesPage(){
    return(
        <>
        <Header/>
        <div className={styles.background}>
            <h2 className={styles.homeTitle}>Tudo que você precisa saber em um lugar <br/>
            Portal de informações sobre Diabetes Mellitus</h2>
            <div className={styles.topicContent}>
                <h3 className={styles.title}>O que é o Diabetes?</h3>
                <p className={styles.text}>O Diabetes é uma condição crônica caracterizada pelo aumento dos níveis de glicose no sangue devido à incapacidade do corpo de produzir ou utilizar adequadamente a insulina, um hormônio responsável pelo controle do açúcar no sangue.<br/><br/> O Diabetes Tipo 2, a forma mais comum da doença, ocorre quando o organismo não responde eficientemente à insulina produzida, resultando em resistência insulínica. Isso leva a um desequilíbrio no metabolismo da glicose, causando elevação dos níveis sanguíneos de açúcar. Fatores como estilo de vida sedentário, dieta inadequada e predisposição genética estão associados ao desenvolvimento do Diabetes Tipo 2, que pode ser controlado com modificações na dieta, exercícios e, em alguns casos, medicamentos.</p>
                <h3 className={styles.title}>Dibetes tipo 2 tem cura?</h3>
                <p className={styles.text}>Quando analisamos pela óptica da medicina, na realidade, o diabetes não tem cura. O que pode acontecer é que a pessoa passe a apresentar, durante ou depois de um tratamento, níveis controlados de açúcar no seu sangue, que podem até serem níveis normais. Mas, uma vez que a pessoa já foi diagnosticada com diabetes, ela será sempre diabética, podendo ser bem controlada, mas terá que ter os cuidados e monitoramento regulares.<br/><br/>

                Muitas vezes, fala-se em cura do diabetes quando, no caso do diabetes tipo 2, a pessoa desenvolve a doença devido ao aumento de peso e ao emagrecer seus níveis de açúcar se normalizam. No entanto, é importante entendermos que o que acontece na verdade é um bom controle da doença e, caso a pessoa volte a ganhar peso, muito provavelmente a doença voltará a dar sinais nos exames de sangue.</p>
                <h3 className={styles.title}>Como fica a alimentação?</h3>
                <p className={styles.text}>A base da alimentação das pessoas com diabetes e outras Doenças Crônicas Não Transmissíveis (DCNTs) deve seguir as recomendações do Guia Alimentar para População Brasileira e do documento Alimentação Cardioprotetora: manual de orientações para os profissionais de saúde da Atenção Básica.

                Confira agora 5 dicas de alimentação saudável para quem convive com  o diabetes.<br/><br/>

                <span className={styles.span}>1 – Prefira alimentos in natura e minimamente processados</span><br/><br/>

                Estamos falando das frutas, legumes, verduras e também do arroz com feijão de cada dia. Apostar na comida de verdade é garantia de mais saúde. Esses alimentos são excelentes fontes de  vitaminas, minerais, fibras e tudo o que o corpo precisa para funcionar bem. Além disso,   oferecem uma quantidade relativamente pequena de calorias, prevenindo o ganho de peso excessivo, uma das condições para o surgimento ou agravamento do diabetes.<br/><br/>

                Por isso, no almoço e jantar, prefira consumir a combinação brasileira: arroz e feijão. Além disso, nas duas refeições, aumente o consumo de verduras e legumes. Já nesse meio tempo, aposte nas frutas para o lanche. É importante lembrar que o ideal é consumir a fruta in natura em vez de sucos, mesmo os naturais. E as carnes vermelhas, mesmo sendo considerada comida de verdade, devem ter seu consumo reduzido por quem possui o diabetes.<br/><br/>

                Alguns aditivos fazem parte das preparações culinárias, como é o caso do sal e o açúcar. Porém esses ingredientes precisam ser utilizados com moderação para que o seu consumo seja seguro. Por isso, reduza a quantidade de sal nas suas refeições. Já a sacarose e os alimentos contendo sacarose, como açúcar, mel, açúcar mascavo, garapa, melado, rapadura e doces caseiros, não são proibidos para indivíduos com diabetes, portanto, podem ser consumidos como parte de uma alimentação saudável. Entretanto, o consumo desses ingredientes/ alimentos deve ser restrito (em pequenas quantidades), correspondendo no máximo até uma porção por dia (1 colher de sopa).  <br/><br/>

                É importante reforçar que os alimentos in natura ou minimamente processados possuem um sabor naturalmente doce, principalmente quando bem frescos. Valorize essa característica evitando a adição de adoçantes. Mas se mesmo assim eles forem consumidos, precisam estar em pequenas quantidades.<br/><br/>

                <span className={styles.span}>2 – Consuma frutas, legumes e verduras preferencialmente crus</span><br/><br/>

                Já que a dica número 1, regra de ouro do Guia Alimentar Para a População Brasileira, é fazer dos alimentos in natura e minimamente processados a base da alimentação, a ideia também é otimizar esse consumo. Quem possui diabetes deve consumir diariamente frutas, verduras e legumes preferencialmente crus, porque nesse estado eles possuem maiores quantidades de fibras . E isso é importante porque elas possuem um efeito redutor comprovado de glicemia e dos teores de gordura no sangue, como colesterol.<br/><br/>

                <span className={styles.span}>3 – Reduza e evite o consumo de alimentos ultraprocessados</span><br/><br/>

                Estudos mostram que o maior consumo de alimentos ultraprocessados está associado a um maior risco de diabetes. Fazem parte desse universo os “salgadinhos de pacote”, bebidas adoçadas artificialmente (refrigerantes, sucos artificiais e similares), comidas prontas para consumo, embutidos e fast foods. Esses produtos são hiperpalatáveis, ou seja: extremamente saborosos e capazes de “viciar” o paladar dos consumidores. Atrelado a isso, existem outros fatores que favorecem a ingestão excessiva, como as grandes porções em que eles costumam ser vendidos.<br/><br/>

                Por conterem grande quantidade de açúcar, gordura, sódio e calorias, podem contribuir para desenvolvimento e até aumentar o risco de doenças como diabetes, doenças cardiovasculares e câncer, como explica o livro Desmistificando dúvidas sobre Alimentação e Nutrição, produzido pelo Ministério da Saúde. Mesmo as versões diet e light devem ser evitadas porque também são alimentos ultraprocessados e possuem em excesso ingredientes que podem fazer mal à saúde, como os edulcorantes.<br/><br/>

                <span className={styles.span}>4 – Beba água e evite o consumo de bebidas açucaradas</span><br/><br/>

                Sentiu sede? É com a água pura que você deve se hidratar. Não há outra bebida que possa substitui-la, principalmente quando falamos daquelas com adição de açúcares, tais como os refrigerantes, as bebidas alcoólicas adoçadas com açúcar, as de frutas, as vitaminas, as energéticas e as esportivas.<br/><br/>

                <span className={styles.span}>5 – Atenção ao rótulo dos alimentos</span><br/><br/>

                O açúcar pode estar presente em alguns produtos com outros nomes, como sacarose, frutose, maltodextrina, xarope de milho, xarope de malte e açúcar invertido.</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}