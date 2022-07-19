import './AboutMe.css';
import myPhoto from '../../images/my-photo.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Павел Волков</h3>
          <p className='about-me__about'>Фронтенд-разработчик, 35 лет</p>
          <p className='about-me__text'>Родился в городе Ухта, живу в Санкт-Петербурге. В IT я с 2007 года. Начинал с системного администрирования, а в 2011 году окунулся в мир веба. Создавал сайты, администрировал сервера. С 2015 года открыл для себя новую сферу работы – разработка электронных курсов. Занимаюсь этим и по сей день. На курсе Яндекс.Практикума решил узнать что-то новое и использовать знания в работе.
          </p>
          <div className='about-me__contacts'>
            <a className='about-me__link' href='https://pvolkov.ru' target='_blank'>Веб-сайт</a>
            <a className='about-me__link' href='https://github.com/pvolkov' target='_blank'>Github</a>
          </div>
        </div>
        <div className='about-me__image-container'>
          <img className='about-me__image' src={myPhoto} alt='Павел Волков' />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;