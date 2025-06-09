'use client';

import { useState } from 'react';
import Image from 'next/image';

import s from './Cases.module.scss';


import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Cases =() =>{
    const [Cases, setCases] = useState(
        [
            {
                image: '/Nezzerland.png',
                stack: 'Next.js, Nest.js, MongoDB',
                title: 'Nezzerland',
                description: 'Developed a social media platform with a real-time friend tracking map, chat for communication, user profiles, and a blog.'
            },
            {
                image: '/Cinema.png',
                stack: 'React, Express.js, MongoDB',
                title: 'Online Cinema',
                description: 'Created an online cinema platform with movie listings, user reviews.'
            },
            {
                image: '/Music.png',
                stack: 'React, Express.js, MongoDB',
                title: 'Music learning platform',
                description: 'Created a music learning platform with interactive lessons, quizzes and progress tracking and most importantly, a DAW on the site for creating music drum machine + piano roll.'
            },
            {
                image: '/Pet.png',
                stack: 'React, Express.js, MongoDB',
                title: 'Growing Pet ',
                description: 'Developed a pet care platform with animal profiles, health and hunger tracking, playfulness and sleep, a marketplace with products, medicines and backgrounds, as well as a business system and a clicker game.'
            }
            
        ]
    );
    const [isVisible, setIsVisible] = useState(0);
    return (
        <div className={s.CasesContainer}>
            <div className={s.DesignLine}></div>
            <h1 className={s.CaseCounter}>My favorite project</h1>
            {Cases.map((item, index) => (
                index === isVisible ? (
                    <div key={index} className={s.CaseItemVisible}>
                        <button onClick={() => setIsVisible((prev) => (prev > 0 ? prev - 1 : Cases.length - 1))} className={s.PrevButton}><IoIosArrowBack className={s.SkipIcon}/></button>
                        <Image src={item.image} alt={item.title} width={800} height={500} style={{height: 'auto', borderRadius: '10px'}} className={s.ImageCases}/>
                        <div className={s.CaseTextContainer}>
                            <h1 className={s.CaseTitle}>{item.title}</h1>
                            <h3 className={s.CaseStack}>{item.stack}</h3>
                            <p className={s.CaseDescription}>{item.description}</p>
                            <button className={s.CaseButton}>View Case</button>
                        </div>
                        <button onClick={() => setIsVisible((prev) => (prev < Cases.length - 1 ? prev + 1 : 0))} className={s.NextButton}><IoIosArrowForward className={s.SkipIcon}/></button>
                        
                    </div>
                ) : <div key={index}></div>
            ))}
        </div>
    )
}

export default Cases;