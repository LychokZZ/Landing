import s from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={s.Footers}>
                <a href="https://www.linkedin.com/in/ivan-lychuk-46b4502aa/" 
                    className={s.ButtonClick}>
                    LinkedIn
                </a>
                <a href="https://www.fiverr.com/threkurs_beat/develop-a-full-stack-web-app-using-react-nodejs-and-mongodb" 
                    className={s.ButtonClick}>
                    Fiverr
                </a>
                <a href="mailto:ivanluch13@gmail.com" 
                    className={s.ButtonClick}>
                    E-mail
                </a>
        </div>
    )
}
export default Footer;