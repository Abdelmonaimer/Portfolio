import React from "react";
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Carousel } from 'primereact/carousel';


// images 
import AReact from '../images/advancedReact.png';
import AgileIntro from '../images/AgileIntro.png';
import bootstrap4 from '../images/bootstrap4.png';
import cloud1 from '../images/cloud.png';
import devReact1 from '../images/devReact.png';
import devops1 from '../images/devops.png';
import dca1 from '../images/dca.png';


function Certificats() {

    const react = {
        title: 'Advanced React',
        subTitle: 'Meta',
        content: 'Identifiant : 9ABRKNA2R67F',
        imageUrl: <Image alt="Card" src={AReact}  width={20} height={450}/>
    };

    const agile = {
        title: 'Introduction to Agile Development and Scrum',
        subTitle: 'IBM',
        content: 'Identifiant : 9PCWCPWEGQCK',
        imageUrl: <Image alt="Card" src={AgileIntro}  width={20} height={450}/>
    };

    const bootstrap = {
        title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
        subTitle: 'THE HONG KONG UNIVERSITYOF SCIENCE AND TECHNOLOGY',
        content: 'Identifiant : XAQJMTT7EPE3',
        imageUrl: <Image alt="Card" src={bootstrap4}  width={20} height={450}/>
    };

    const cloud = {
        title: 'Introduction to Cloud Computing',
        subTitle: 'IBM',
        content: 'Identifiant : P4KKQH9CB7T8',
        imageUrl: <Image alt="Card" src={cloud1}  width={20} height={450}/>
    };
    const devReact = {
        title: 'Front-End Web Development with React',
        subTitle: 'THE HONG KONG UNIVERSITYOF SCIENCE AND TECHNOLOGY',
        content: 'Identifiant : UZ66FENE7AWW',
        imageUrl: <Image alt="Card" src={devReact1}   height={450}/>
    };
    const devops = {
        title: 'Introduction to DevOps',
        subTitle: 'IBM',
        content: 'Identifiant : 7CNEAW4UKWNH',
        imageUrl: <Image alt="Card" src={devops1}   height={450}/>
    };
    const dca = {
        title: 'DevOps, Cloud, and Agile Foundations',
        subTitle: 'IBM',
        content: 'Identifiant : NAUZ87RJDHRQ',
        imageUrl: <Image alt="Card" src={dca1}  height={450}/>
    };

    const cards = [dca, devReact, react, agile, bootstrap, cloud, devops];

    const cardTemplate = (card) => {
        return (
            <div className="text-center justify-content-center">
                <Card title={card.title} subTitle={card.subTitle} header={card.imageUrl}>
                    {card.content}
                </Card>
            </div>

        );
    };


    return (
        <div columns={{ xs: 1, sm: 2, md:3}} className="p-fluid">
            <div className="p-row mt-2 ">
                <div className="p-col ">
                    <div className="carousel-demo">
                        <Carousel value={cards} itemTemplate={cardTemplate} />
                    </div>
                </div>
            </div>
            <div className="p-row mt-5">

            </div>
        </div>
    );

}
export default Certificats;