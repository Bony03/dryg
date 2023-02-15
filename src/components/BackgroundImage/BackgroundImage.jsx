import s from './BackgroundImage.module.css'

const BackgroundImage = () => {
  return (
    <div className={s.mainBlock}>
      <img src="53.jpg" alt="backgroundImage"></img>
      <div className={s.container}>
        <div className={s.contentBlock}>
          <div className={s.titleBlock}>
            <h1 className={s.title}>Dryg</h1>
            <h3 className={s.titleBig}>Made in Ukraine</h3>
            <h3 className={s.titleBig}>For Brave people</h3>
            <h3 className={s.titleSmall}>Since 2022</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackgroundImage
