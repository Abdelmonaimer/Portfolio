import React from "react";
//import { Grid } from 'primereact/grid';
import { Card } from "primereact/card";
function Projects() {

    return (
        <div columns={{ xs: 1, sm: 2, md: 3 }} className="p-fluid">
            <div className="p-row">
                <div className="p-col m-2">
                    <Card title="Pokemon Stats Mobile Application" subTitle="Java - AndriodStudio">
                        <h4 className="">Description :</h4>
                        <p className="">This is a mobile application built using Android Studio and Java that retrieves data from the Pokemon API and displays it in a user interface.</p>
                        <p className="">Learn more on github : <a href="https://github.com/Abdelmonaimer/PokemonApp">https://github.com/Abdelmonaimer/PokemonApp</a> </p>
                    </Card>
                </div>
                <div className="p-col m-2">
                    <Card title="Converter Mobile Application" subTitle="Java - AndriodStudio">
                        <h4 className="">Description :</h4>
                        <p className="">This is a mobile application built using Android Studio and Java that converts currencies from dollar/euro/moroccan dirhams .</p>
                        <p className="">Learn more on github : <a href="https://github.com/Abdelmonaimer/ConverterApp">https://github.com/Abdelmonaimer/ConverterApp</a> </p>
                    </Card>
                </div>
                <div className="p-col m-2">
                    <Card title="Morpion / TIC-TAC-TOE / X-O" subTitle="ReactJS">
                        <h4 className="">Description :</h4>
                        <p className="">X-O Game with levels vs Computer or player V player.</p>
                        <p className="">Learn more on github : <a href="https://github.com/Abdelmonaimer/morpion">https://github.com/Abdelmonaimer/morpion</a> </p>
                    </Card>
                </div>
            </div>
            <div className="p-row m-2">

            </div>
        </div>
    );
}
export default Projects;