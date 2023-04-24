import React from 'react';
import logo from '../images/cv_pic.jpg';
import { Avatar } from 'primereact/avatar';
import '../Css/speeddial.css';
import { styled } from '@mui/material';
import { Box } from '@mui/material';
import { SpeedDial } from '@mui/material';
import { SpeedDialAction } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';





function Header() {
    const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
        position: 'absolute',
        '&.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        }
    }));

    const actions = [
        { icon: <Link to="https://facebook.com/abd.elmonum.7/"><FacebookIcon /></Link>, name: 'Facebook' },
        { icon: <Link to="https://twitter.com/AbdelmonaimEr?t=E1RfNXqiwvpGe42nGML35g&s=09"><TwitterIcon /></Link>, name: 'Twitter' },
        { icon: <Link to="https://instagram.com/abdelmonaim_er?igshid=ZDdkNTZiNTM="><InstagramIcon /></Link>, name: 'Instagram' },
        { icon: <Link to="https://www.linkedin.com/in/abdelmonaim-erraji-4a3901250/"><LinkedInIcon /></Link>, name: 'LinkedIn' },
    ];

    return (
        <div columns={{ xs: 1, sm: 2, md: 3 }} className="p-fluid">
            <div className='p-row justify-content-center text-center py-5' style={{ backgroundColor: '#2a4696' }}>
                <div className='p-col'>
                    <div className='justify-content-end text-end'>
                        <Box sx={{ position: 'relative', mt: 1, height: 25 }}>
                            <StyledSpeedDial
                                ariaLabel="SpeedDial playground openIcon example"
                                hidden={false}
                                icon={<LinkIcon />}
                                direction={'left'}
                            >
                                {actions.map((action) => (
                                    <SpeedDialAction
                                        key={action.name}
                                        icon={action.icon}
                                        tooltipTitle={action.name}
                                    />
                                ))}
                            </StyledSpeedDial>
                        </Box>
                    </div>
                    <div className="text-center">
                        <Avatar
                            image={logo}
                            shape="circle"
                            size="xlarge"
                            className="p-shadow-4"
                            style={{ width: '150px', height: '150px' }}
                        />
                    </div>
                    <h1 className='h1 mt-3' style={{ color: 'white' }}>Mr. Abdelmonaim ERRAJI</h1>
                    <h5 style={{ color: '#E9EBEF' }}>Etudiant 4eme annee Ingenieurie Informatique et Reseau en EMSI</h5>
                </div>
            </div>
        </div>
    );
}
export default Header;