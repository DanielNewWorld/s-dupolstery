import React from 'react';
import styleCSS from './Footer.module.css';
import copyright from '../../images/Copyright.png';

const Footer = (props) => {
    return (
        <div className={styleCSS.footer}>
            <div className={styleCSS.gridFooter}>
                <div className={styleCSS.dateCopiright}>
                    <h3><img src={copyright} className={styleCSS.copyright} />2023</h3>
                </div>

                <div className={styleCSS.nameFirma}>
                    <h3>{props.data.name}</h3>
                </div>

                <div className={styleCSS.emailFirma}>
                    <h3><a href={`mailto:${props.data.email}`}>Email Us!</a></h3>
                </div>

                <div className={styleCSS.telephoneFirma}>
                    <h3>{props.data.telephone}</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;