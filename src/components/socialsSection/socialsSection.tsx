import react from 'react';
import { Github, Linkedin, Facebook, Instagram, Envelope } from 'react-bootstrap-icons';
import Style from './socialsStyle.module.scss';

export default function SocialsSection() {

    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const openMail = () => {
        window.location.href = 'mailto:alex.abrahamsson@gmail.com';
    };


    return (
        <div className={Style.RightBorderContainer}>
            <div
                style={{
                    padding: '15px 0 0 0',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}
            >
                <div onClick={() => openInNewTab('https://github.com/Alex-Abrahamsson')}>
                    <Github className={Style.MyIcons} />
                </div>
                <div onClick={() => openInNewTab('https://www.linkedin.com/in/alexander-abrahamsson-60ab83220/')}>
                    <Linkedin className={Style.MyIcons} />
                </div>
                <div onClick={() => openInNewTab('https://www.facebook.com/alexander.abrahamsson.92')}>
                    <Facebook className={Style.MyIcons} />
                </div>
                <div onClick={() => openInNewTab('https://www.instagram.com/alexanderabris/')}>
                    <Instagram className={Style.MyIcons} />
                </div>
                <div onClick={() => openMail()}>
                    <Envelope className={Style.MyIcons} />
                </div>
            </div>
        </div>
    );
}
