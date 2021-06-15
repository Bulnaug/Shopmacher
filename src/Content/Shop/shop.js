import Filter from './Filter/filter';
import Artikeln from './Artikeln/artikeln';
import style from './shop.module.css'

const Shop = (props) => {
  return (

      <div className={style.shop}>
        <div className={style.inside}>
          <h2>Die neusten Artikel</h2>
          <Filter />
          <Artikeln />
        </div>
      </div>

  );
}

export default Shop;
