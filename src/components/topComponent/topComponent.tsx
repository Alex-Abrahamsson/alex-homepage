import React, { ReactNode, useState } from 'react';
import Style from './topComponent.module.scss';
import ScrollingText from '../scrollingText/scrollingText';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Eye from '../eye/eye';
import AboutText from '../aboutText/aboutText';
import loomLight from '../../assets/LoomeMock.png';
import loomDark from '../../assets/LoomDark.png';
import store from '../../assets/Store.png';

interface ITopComponent {
    WelcomeText: boolean;
    TopRow?: string;
    BottomRow?: string;
    Opacity?: number;
}

export default function TopComponent({ WelcomeText, TopRow, BottomRow, Opacity = 1 }: ITopComponent) {
    const [expanded, setExpanded] = useState([false, false, false]);

    const handleClick = (index: number) => {
        setExpanded(prevExpanded => {
            const newExpanded = prevExpanded.map((item, idx) => idx === index ? !item : false);
            return newExpanded;
        });
    };

    const aboutSection: ReactNode = 
        <div style={{ display: 'flex', width: '95%', height: '90%', justifyContent: 'center', flexDirection: 'column', textAlign: 'left' }}>
            <h3 style={{ textAlign: 'center'}}>Vem är jag?</h3>
            <p>Jag tycker verkligen om programmering och det har bara växt sig
                starkare med åren. Det började med ett intresse för datorer
                och själva spelandet men det utvecklades sedan till att jag
                programmerade egna spel genom Unreal engine5.
            </p>
            <p>
                I mitt övriga hobbyprogrammerande började jag forska i vilket
                språk som passar mig bäst och kom fram till att C# var ett språk
                som jag inte bara skulle kunna få jobba med utan även ett språk
                som det går att göra spel med på fritiden.
            </p>
            <p>
                År 2020 tog jag klivet , studieledigt från jobbet och
                sökte mig in på yrkeshögskolan för att studera programmering -
                det har jag inte ångrat en sekund.
            </p>
            <h3 style={{ textAlign: 'center'}}>Vad kan jag tillföra?</h3>
            <p>
                Förutom mitt intresse för programmering och utveckling tar jag
                även med mig glädje och positivt tänkande. Jag är expert på att
                omvandla jobbiga problem till roliga utmaningar att lösa.
            </p>
            <p>
                På den yrkeshögskoleutbildning jag gick fick jag
                bland annat lära mig C#, Databaser med SQL, JavaScript,
                HTML/CSS och Entity Framework, samtliga kurser med högsta
                betyg.
            </p>
        </div>
    ;

    const portfolioSection: ReactNode =
        <div className={Style.PortfolioContainer}>
            <h2 className={Style.CenterText}>Portfolio</h2>
            <div className={Style.Row}>
                <div className={Style.Col}>
                    <h3 className={Style.CenterText}>Loomer</h3>
                    <div className={Style.Row}>
                        <img src={loomLight} alt='placeholder' height={350} className={Style.MyImg} />
                        <img src={loomDark} alt='placeholder' height={350} className={Style.MyImg} />
                    </div>
                </div>
                <div className={Style.StoreImgContainer}>
                    <h3 className={Style.CenterText}>StoreManager</h3>
                    <div className={Style.Row}>
                        <img src={store} alt='placeholder' height={350} className={Style.MyImg} />
                    </div>
                </div>
            </div>
        </div>
    ;

    const contactSection: ReactNode = 
    <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', flexDirection: 'column', textAlign: 'left' }}>
        <h3 style={{ textAlign: 'center'}}>Kontakt</h3>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'space-around', flexDirection: 'row' }}>
            <a href='mailto:alex.abrahamsson@gmail.com'>
                <i className="bi bi-envelope"></i>
            </a>
            <a href='https://www.facebook.com/alexander.abrahamsson.92'>
                <i className="bi bi-facebook"></i>
            </a>
            <a href='https://www.linkedin.com/in/alexander-abrahamsson-60ab83220/'>
                <i className="bi bi-linkedin"></i>
            </a>
            <a href='https://github.com/Alex-Abrahamsson'>
                <i className="bi bi-github"></i>
            </a>
        </div>
    </div>
;
    
    if (!WelcomeText) {
        return (
            <div className={Style.MainContainer} style={{ opacity: Opacity, pointerEvents: Opacity === 1 ? 'auto' : 'none' }}>
                <div className={Style.TextContainer}>
                    <AboutText beforeO='AB' afterO='UT' onClick={() => handleClick(0)} expanded={expanded[0]} hiddenPage={aboutSection} oHeight={550} oWidth={1000}/>
                    <AboutText beforeO='PORTF' afterO='LIO' onClick={() => handleClick(1)} expanded={expanded[1]} hiddenPage={portfolioSection} oHeight={520} oWidth={700}/>
                    <AboutText beforeO='C' afterO='NTACT' onClick={() => handleClick(2)} expanded={expanded[2]} hiddenPage={contactSection} oHeight={150} oWidth={300}/>
                </div>
            </div>
        );
    }

    if (!TopRow || !BottomRow) {
        console.error('TopComponent: TopRow or BottomRow is undefined');
        return null;
    }

    return (
        <div className={Style.MainContainer} style={{ opacity: Opacity, pointerEvents: Opacity === 1 ? 'auto' : 'none' }}>
            <div className={Style.TextContainer}>
                <Eye height='25px' width='25px' left='64.5%' top='21.5%'/>
                <h1>{TopRow}</h1>
                <ScrollingText />
                <Eye height='25px' width='25px' left='12%' top='78%'/>
                <h1>{BottomRow}</h1>
            </div>
        </div>
    );
}