import style from './feedback.module.css'

const Feedback = (props) => {
  return (

      <div className={style.feedback}>
        <div className={style.inside}>

          <h2> Top Themen</h2>

          <div>
            <div className={style.feedbackContainer}>
              <div className={style.header}>Gaming</div>
              <div className={style.wrapper}>
                <p>Neuster Artikel :</p>
                <div>Mit diesen Dell Monitoren haben Sie quasi schon gewonnen</div>
              </div>
            </div>

            <div className={style.feedbackContainer}>
              <div className={style.header}>Drucker</div>
              <div className={style.wrapper}>
                <p>Neuster Artikel :</p>
                <div>Der neue Toner von Xerox: „Xerox® Everyday™ Toner“</div>
              </div>
            </div>

            <div className={style.feedbackContainer}>
              <div className={style.header}>Technik</div>
              <div className={style.wrapper}>
                <p>Neuster Artikel :</p>
                <div>Wissen Mit OP - Prozessorkerne</div>
              </div>
            </div>

            <div className={style.feedbackContainer}>
              <div className={style.header}>Wissenswert</div>
              <div className={style.wrapper}>
                <p>Neuster Artikel :</p>
                <div>Jetzt noch mehr Zahlungsmöglichkeiten im Shop</div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Feedback;
