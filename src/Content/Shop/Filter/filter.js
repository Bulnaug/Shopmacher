import style from './filter.module.css'

const Filter = (props) => {
  return (
          <div className={style.filter}>
            <p>Filtern nach Kategorien</p>
            <div class={style.filterButtons}>
              <div>
                <p>Aktionen</p><p>45</p>
              </div>
              <div>
                <p>Drucker</p><p>12</p>
              </div>
              <div>
                <p>Gaming</p><p>5</p>
              </div>
              <div>
                <p>Gewinnspiele</p><p>3</p>
              </div>
              <div>
                <p>Monitore & Beamer</p><p>26</p>
              </div>
              <div>
                <p>Produkttest</p><p>45</p>
              </div>
              <div>
                <p>PC & Notebook</p><p>45</p>
              </div>
              <div>
                <p>Server & Netzwerk</p><p>45</p>
              </div>
              <div>
                <p>Produktvorstellung</p><p>45</p>
              </div>
              <div>
                <p>Wissenswert</p><p>45</p>
              </div>
              <div>
                <p>Alle anzeigen</p><p>45</p>
              </div>
            </div>
          </div>
  );
}

export default Filter;
