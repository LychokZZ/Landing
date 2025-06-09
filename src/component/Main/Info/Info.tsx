'use client';
import { useEffect, useState } from 'react';
import s from './Info.module.scss';
import { title } from 'process';

const Info = () =>{
    const [db, setDb] = useState([
        {
            title: 'Professional experience',
            description: '2+ years'
        },
        {title: 'Successful projects',
            description: '10+'
        },
        {
            title: 'Clients from worldwide',
            description: '6+'
        }
    ])
    const [isVisible, setIsVisible] = useState(0);
    useEffect(() => {
        setInterval(()=>{
            setIsVisible((prev) => {
                if (prev < db.length - 1) {
                    return prev + 1;
                } else {
                    return 0;
                }
            });
        },2000)
    },[])
    return (
        <div className={s.InfoContainer} >
            <div className={s.InfoTextContainer}>
                <h1 className={s.BaseInfoText}>Who am I</h1>
                <p> I am a passionate Full-Stack Developer specializing in 
                    building scalable and maintainable web applications using 
                    Next.js, NestJS, and MongoDB. I thrive on creating seamless user 
                    experiences with clean, efficient code, whether it's developing 
                    real-time chat apps, admin panels, or complex marketplaces.</p>
            </div>
            <div className={s.InfoRoll}>
                {db.map((item, index) => (
                    index === isVisible ? (
                        <div key={index} className={s.InfoItem}>
                            <h3 className={s.SmallText}>{item.title}</h3>
                            <h1 className={s.BigText}>{item.description}</h1>
                        </div>
                    ): <div key={index}></div>
                ))}
            </div>
        </div>
    )    
}

export default Info;
