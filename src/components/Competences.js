import React from "react";
import { Fieldset } from 'primereact/fieldset';

function Competences() {
    const legendTemplate = (
        <div className="flex align-items-center text-primary">
            <span className="font-bold text-lg">En cours - Ingenieurie Informatique et Réseaux</span>
        </div>
    );
    const legendTemplate1 = (
        <div className="flex align-items-center text-primary">
            <span className="font-bold text-lg">Diplome Bac +3 en Genie Informatique</span>
        </div>
    );
    const legendTemplate2 = (
        <div className="flex align-items-center text-primary">
            <span className="font-bold text-lg">Baccalauréat en sciences et techniques mecanique</span>
        </div>
    );
    const Style = {
        display: '',
        justifyContent: 'center'
    }
    return (
        <div columns={{ xs: 1, sm: 2, md: 3 }} className="p-fluid" >
            <div className="p-row" style={Style}>
                <div className="p-col justify-content-center">
                    <div className="card mt-4">
                        <Fieldset legend={legendTemplate} toggleable>
                            <p className="mt-2 " style={{ color: 'black', fontWeight: 'bold' }}>
                                Ecole Marocaine des sciences de l'Ingénieur - EMSI
                            </p>
                            <p className="m-0">
                                2022/2023
                            </p>
                        </Fieldset>
                    </div>
                </div>
            </div>
            <div className="p-row" style={Style}>
                <div className="p-col justify-content-center">
                    <div className="card mt-4">
                        <Fieldset legend={legendTemplate1} toggleable>
                            <p className="mt-2 " style={{ color: 'black', fontWeight: 'bold' }}>
                                Ecole Supérieur de Marrakech - ESMA
                            </p>
                            <p className="m-0">
                                2019/2022
                            </p>
                        </Fieldset>
                    </div>
                </div>
            </div>
            <div className="p-row" style={Style}>
                <div className="p-col justify-content-center">
                    <div className="card mt-4">
                        <Fieldset legend={legendTemplate2} toggleable>
                            <p className="mt-2 " style={{ color: 'black', fontWeight: 'bold' }}>
                                Lycée Hassan II - Marrakech
                            </p>
                            <p className="m-0">
                                2017/2018
                            </p>
                        </Fieldset>
                    </div>
                </div>
            </div>
            <div className="p-row mt-5">
                
            </div>
        </div>

    );
};

export default Competences;