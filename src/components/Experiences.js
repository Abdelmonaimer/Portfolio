import React from "react";
import { Card } from 'primereact/card';
import Divider from '@mui/material/Divider';   

function Experiences() {

    const cardStyle = {
        display: '',
        justifyContent: 'center'
    }
    return (
        <div columns={{ xs: 1, sm: 2, md: 3 }} className="p-fluid" >
            <div className="p-row my-3" style={cardStyle}>
                <div className="p-col justify-content-center">
                    <Card title='Stage CRE-UP ' style={{ color: '#1976d2' }}>
                        <Divider variant="middle" />
                        <p className="mt-2 " style={{ color: 'black', fontWeight: 'bold' }}>
                            Juillet-aout 2022 ( 8 semaines )
                        </p>
                        <p className="m-0" style={{ color: 'black' }}>
                            - Création de front-end d'un site web de vente de véhicules en <b>REACTJS.</b> <br></br>
                            - Création d'un site web de voyage touristique <b>( LARAVEL/REACTJS ).</b>
                        </p>
                    </Card>
                </div>
            </div>
            <div className="p-row mb-5" style={cardStyle}>
                <div className="p-col justify-content-center">
                    <Card title='Stage J2CD ' style={{ color: '#1976d2' }}>
                        <Divider variant="middle" />
                        <p className="mt-2 " style={{ color: 'black', fontWeight: 'bold' }}>
                            Juillet 2021 ( 4 semaines )
                        </p>
                        <p className="m-0" style={{ color: 'black' }}>
                            - Création d'une application desktop de gestion d'un restaurant <b>( C# ).</b> <br></br>
                            - Création d'un site web commerce d'entreprise J2CD, Front-end <b>( HTML CSS BOOTSTRAP ).</b>
                        </p>
                    </Card>
                </div>
            </div>
            <div className="p-row ">

            </div>

        </div>

    )

}
export default Experiences;