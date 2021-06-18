import style from './body.module.css';
import Banner from './Banner/banner';
import Feedback from './Feedback/feedback';
import Frame from './Frame/frame';
import Shop from './Shop/shop';

const Conent = (props) => {
  return (

      <div className={style.app_body}>
        <div className={style.inside}>
          <Banner />
          <Feedback />
          <Frame />
          <Shop />
        </div>
      </div>

  );
}

export default Conent;
