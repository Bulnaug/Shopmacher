import React from 'react';
import style from './topbar.module.css';


const TopBar = () => {
  return (
      <div className={style.topbar}>
        <div className={style.inside}>
          <ul>
            <li><a href=''>Kostenloser Rückversand</a></li>
            <li><a href=''>30 Tage Wiederufrecht</a></li>
            <li><a href=''>Persönliche Ansprechpartner</a></li>
            <li><a href=''>Seit 1997 am Markt</a></li>
            <li><a href=''>Alle gängigen Zahlarten</a></li>
          </ul>
        </div>
      </div>
  );
}

export default TopBar;