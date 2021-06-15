import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import style from './sozial.module.css';



const Sozial = () => {
  return (
    <div>
      <div className={style.sozial_bar}>
        <p>Folge Uns</p>
        <FontAwesomeIcon icon={faFacebookSquare} />
        <FontAwesomeIcon icon={faTwitterSquare} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div className={style.newsletter}>
        <div className={style.header}>

        </div>
        <div className={style.wrapper}>
          <h3>Unsere Heighlights in Newsletter</h3>
          <p>Angebote, Aktionen und Verbraucherinformationen jede Woche bequem per E-Mail.</p>
          <form action="" method="get">
              <div className={style.addMail}>
                <label for="mail" className={style.invisible}>E-mail</label>
                <input type="mail" name="keywords" id="mail" value="" placeholder='Ihre E-Mail Adresse'/>
                <button type="submit" className={style.submit}>Jetzt kostenlos abbonieren</button>
              </div>
            </form>          
        </div>
      </div>
    </div>
  );
}

export default Sozial;