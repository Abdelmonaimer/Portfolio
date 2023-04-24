import React from "react";
import { Card } from 'primereact/card';
import Divider from '@mui/material/Divider';     

function Home() {
    const cardStyle = {
        display: '',
        justifyContent: 'center'
    }
    return (
        <div columns={{ xs: 1, sm: 2, md: 3 }} className="p-fluid" >
            <div className="p-row" style={cardStyle}>
                <div className="p-col justify-content-center">
                    <Card title='ERRAJI Abdelmonaim' style={{color: '#1976d2'}}>
                    <Divider variant="middle" />
                        <p className="m-0 px-3 mt-3 mb-3" style={{color:'black'}}>
                        Bonjour! Je m'appelle <b>Abdelmonaim ERRAJI</b>, et je suis un étudiant en <b>Ingenieurie Informatique et Réseaux</b> en <b>EMSI</b> de 24 ans passionné par la technologie et l'innovation, diplômé de l'<b>ESMA</b> avec un <b>BAC+3 génie Informatique</b>.
                        J'ai un large éventail de compétences et d'expériences qui me permettent d'aborder des problèmes complexes et de proposer des solutions innovantes.<br></br>
                        En tant que programmeur qualifié, j'ai une expertise dans plusieurs langages de programmation, notamment ReactJS, Java, J2E, C#, C++, PHP et Laravel. Je maîtrise également les technologies de développement web telles que (HTML CSS Bootstrap JavaScript). J'ai une expérience dans la gestion de bases de données, avec une connaissance de SQL Server, MySQL et Oracle Administration.<br></br>
                        De plus, j'ai une expérience en administration informatique, y compris une maîtrise de l'administration de serveurs Windows et Linux, ainsi qu'une certification CCNA (Cisco Certified Network Associate).<br></br>
                        En plus de mes compétences techniques, je possède des compétences en gestion et en marketing qui font de moi un candidat complet pour divers rôles. Je crois que de solides compétences en communication sont essentielles au succès, c'est pourquoi je parle couramment trois langues : l'arabe, le français et l'anglais.<br></br>
                        Certaines de mes principales réalisations incluent le développement d'une application Web à l'aide de ReactJS qui a augmenté l'engagement des utilisateurs et la mise en œuvre d'un nouveau système de gestion de base de données qui a amélioré les performances des requêtes. Je suis toujours à la recherche de nouveaux défis et d'opportunités pour apprendre et grandir.<br></br>
                        Quand je ne code pas, vous pouvez me trouver en train de faire du sport, de regarder des films, de jouer à des jeux ou d'explorer de nouveaux endroits.<br></br>
                        J'ai fait deux stages en deux années différentes,
                        le premier en entreprise <b>J2CD</b> en juillet 2021, était un stage de 1 mois, et le second en entreprise <b>CRE-UP</b>, un stage de 2 mois.<br></br>
                        Je suis enthousiasmé par l'avenir de la technologie et par la manière dont elle peut être utilisée pour résoudre certains des défis les plus urgents au monde. Je suis convaincu que mes compétences, mon expérience et ma passion font de moi un atout pour toute organisation. Merci d'avoir pris le temps d'en savoir plus sur moi, et j'ai hâte d'avoir de vos nouvelles bientôt.
                        </p>
                    </Card>
                </div>
            </div>
            <div className="p-row mt-5">
                
            </div>
        </div>

    )
}
export default Home;