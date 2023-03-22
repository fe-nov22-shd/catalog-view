import { Link } from 'react-router-dom';
import './ContactUs.scss';
import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';
import image5 from '../../img/5.jpg';
import git from '../../img/Github.svg';
import teleg from '../../img/Telegram.svg';
import linked from '../../img/Linked.svg'

export const ContactUs = () => (
  <section className='people'>
    <div className="people__card">
        <img className="people__card-name" src={image1} alt="ss" />
        <p className="people__card-name">Ihor Bondarenko</p>
        <p className="people__card-description">Full-Stack Developer</p>
        <div className="people__card-link">
          <Link to="https://github.com/GarryRocksman"  target={'_blank'}> <img src={git} alt='Github_Logo'/></Link>
          <Link to="https://t.me/ihor_bondarenko_dev"  target={'_blank'}> <img src={teleg} alt='Github_Logo'/></Link>
          <Link to="https://www.linkedin.com/in/ihor-bondarenko-413a2495/"  target={'_blank'}> <img src={linked} alt='Github_Logo'/></Link>
        </div>
    </div>
    <div className="people__card">
        <img className="people__card-name" src={image2} alt="People_card" />
        <p className="people__card-name">
          Oleksand Malyi
        </p>
        <p className="people__card-description"> Full-Stack Developer</p>
        <div className="people__card-link">
          <Link to="https://github.com/Oleksandr-Maly"  target={'_blank'}> <img src={git} alt='Github_Logo'/></Link>
          <Link to="https://t.me/OleksandrMalyi"  target={'_blank'}> <img src={teleg} alt='Github_Logo'/></Link>
          <Link to="https://www.linkedin.com/in/oleksandr-malyi-413424256/"  target={'_blank'}> <img src={linked} alt='Github_Logo'/></Link>
        </div>
    </div>
    <div className="people__card">
        <img className="people__card-name" src={image3} alt="People_card" />
        <p className="people__card-name">
          Oleksandr Prokopenko
        </p>
        <p className="people__card-description">Full-Stack Developer</p>
        <div className="people__card-link">
          <Link to="https://github.com/OleksandrProkop"  target={'_blank'}> <img src={git} alt='Github_Logo'/></Link>
          <Link to="https://t.me/Oleksandr_Prokopenko"  target={'_blank'}> <img src={teleg} alt='Github_Logo'/></Link>
          <Link to="https://www.linkedin.com/in/oleksandr-prokopenko-5b61b91b8/"  target={'_blank'}> <img src={linked} alt='Github_Logo'/></Link>
        </div>
    </div>
    <div className="people__card">
        <img className="people__card-name" src={image4} alt="People_card" />
        <p className="people__card-name">
          Nataliya Vyrsta
        </p>
        <p className="people__card-description">Full-Stack Developer</p>
        <div className="people__card-link">
          <Link to="https://github.com/NVyrsta "  target={'_blank'}> <img src={git} alt='Github_Logo'/></Link>
          <Link to="https://t.me/NataliiaVyrsta"  target={'_blank'}> <img src={teleg} alt='Github_Logo'/></Link>
          <Link to="https://www.linkedin.com/in/nataliia-v-55a326216/"  target={'_blank'}> <img src={linked} alt='Github_Logo'/></Link>
        </div>
    </div>
    <div className="people__card">
        <img className="people__card-name" src={image5} alt="People_card" />
        <p className="people__card-name">
          Oleh Sharha
        </p>
        <p className="people__card-description">Full-Stack Developer</p>
        <div className="people__card-link">
          <Link to="https://github.com/OlehSharha"  target={'_blank'}> <img src={git} alt='Github_Logo'/></Link>
          <Link to="https://t.me/Immortalwizard"  target={'_blank'}> <img src={teleg} alt='Github_Logo'/></Link>
          <Link to="https://www.linkedin.com/in/oleh-sharha-04a35a24b/"  target={'_blank'}> <img src={linked} alt='Github_Logo'/></Link>
        </div>
    </div>
  </section>
)
