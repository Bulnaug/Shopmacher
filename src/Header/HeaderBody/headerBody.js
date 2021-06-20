import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './headerBody.module.css'


const HeaderBody = () => {
  return (
      <div className={style.header_inside}>
        <div className={style.inside}>

          <div className={style.logo}>
            <a href='/'><img src='' alt='logo' /></a>
          </div>
          <div className={style.search_block}>
            <form action="" method="get">
              <div className={style.searchbody}>
        
                <label htmlFor="search" className={style.invisible}>Search</label>
                <input type="search" name="keywords" id="search" value="" placeholder='Suchbegriff eingeben'/><FontAwesomeIcon icon={faSearch} />
              </div>
            </form>
          </div>
          <div className={style.sub_nav}>
            <ul>
              <li><a href="/"><span className={style.icon} data-icon='service'></span><span>Service</span></a></li>
              <li><a href="/damen"><span className={style.icon} data-icon='customers'></span><span>Geschäftskunden</span></a></li>
              <li><a href="/herren"><span className={style.icon} data-icon='heart'></span><span>Merkzettel</span></a></li>
              <li><a href="#"><span className={style.icon} data-icon='account'></span><span>Konto</span></a></li>
              <li><a href="#"><span className={style.icon} data-icon='cart'></span><span>Warenkorb</span></a></li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default HeaderBody;