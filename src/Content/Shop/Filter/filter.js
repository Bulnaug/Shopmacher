import style from './filter.module.css'

const Filter = (props) => {
  return (
          <div className={style.filter}>
            <p className={style.subHeader}>Filtern nach Kategorien</p>
            <div className={style.filterButtons}>
              <div>
                <p className={style.title}>Aktionen</p><p className={style.count}>45</p>
              </div>
              <div>
                <p className={style.title}>Drucker</p><p className={style.count}>12</p>
              </div>
              <div>
                <p className={style.title}>Gaming</p><p className={style.count}>5</p>
              </div>
              <div>
                <p className={style.title}>Gewinnspiele</p><p className={style.count}>3</p>
              </div>
              <div>
                <p className={style.title}>Monitore & Beamer</p><p className={style.count}>26</p>
              </div>
              <div>
                <p className={style.title}>Produkttest</p><p className={style.count}>5</p>
              </div>
              <div>
                <p className={style.title}>PC & Notebook</p><p className={style.count}>22</p>
              </div>
              <div>
                <p className={style.title}>Server & Netzwerk</p><p className={style.count}>5</p>
              </div>
              <div className={style.active}>
                <p className={style.title}>Produktvorstellung</p><p className={style.count}>8</p>
              </div>
              <div>
                <p className={style.title}>Wissenswert</p><p className={style.count}>18</p>
              </div>
              <div className={style.show_all}>
                <p>Alle anzeigen</p>
              </div>
            </div>
          </div>
  );
}

export default Filter;
