import React from 'react';

import style from './navigation.module.css'


const Navigation = () => {
  return (
      <nav className={style.App_navigation}>
        <div className={style.inside}>
          <ul className={style.level_1}>
            <li><a href=''>Alle Kategorien</a></li>
            <li><a href=''>Drucker</a></li>
            <li><a href=''>Tinte & Toner</a></li>
            <li><a href=''>Monitore & Beamer</a></li>
            <li><a href=''>PC & Notebook</a></li>
            <li><a href=''>Server & Netzwerk</a></li>
            <li><a href=''>Apple</a></li>
            <li><a href=''>Deals</a></li>
          </ul>
          </div>
      </nav>
  );
}

export default Navigation;