'use client'
import { useEffect, useState } from 'react';
import s from './Header.module.scss';

const Header = () =>{
    const [pageSize, setPageSize] = useState(0);

    useEffect(() => {
        const updatePageSize = () => {
        const fullHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
        );
        setPageSize(fullHeight);
        };

        updatePageSize();
        window.addEventListener('resize', updatePageSize);

        return () => window.removeEventListener('resize', updatePageSize);
    }, []);

    const scroll = (y:number) => {
        window?.scrollTo({
            top: y,
            behavior: 'smooth',
        });
    }

    return (
        <header className={s.HeaderContainer} >
            <div className={s.Logo}>
                <h3>nezzer</h3>
                <h3>DEV</h3>
            </div>
            <div>
                <button onClick={()=>scroll(pageSize/4)} className={s.ButtonSwitch}>ABOUT ME</button>
                <button onClick={()=>scroll(pageSize/1.9)} className={s.ButtonSwitch}>CASES</button>
                <button onClick={()=>scroll(pageSize/2.9)} className={s.ButtonSwitch}>SERVICE</button>
                <button onClick={()=>scroll(pageSize)} className={s.ButtonSwitch}>CONTACT US</button>
            </div>
        </header>
    )    
}

export default Header;