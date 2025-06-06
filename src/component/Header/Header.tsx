import s from './Header.module.scss';
const Header = () =>{
    return (
        <header className={s.HeaderContainer} >
            <div className={s.Logo}>
                <h3>nezzer</h3>
                <h3>DEV</h3>
            </div>
            <div>
                <button className={s.ButtonSwitch}>ABOUT ME</button>
                <button className={s.ButtonSwitch}>CASES</button>
                <button className={s.ButtonSwitch}>SERVICE</button>
                <button className={s.ButtonSwitch}>CONTACT US</button>
            </div>
        </header>
    )    
}

export default Header;