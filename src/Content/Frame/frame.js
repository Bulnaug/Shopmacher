import style from './frame.module.css'

const Frame = (props) => {
  return (

      <div className={style.frame}>
        <div className={style.inside}>
          <h2>Neustes aus Youtube</h2>
          <iframe src="https://www.youtube.com/embed/videoseries?list=PL3-sRm8xAzY9gpXTMGVHJWy_FMD67NBed" 
          title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>

  );
}

export default Frame;
