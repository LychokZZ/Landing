'use client';
import { useRef, useState } from 'react';
import s from './Technologies.module.scss';

import Card from './Card/Card';

const Technologies = () =>{
    const [Technologies, setTechnologies] = useState(
        [
            {
            title: 'My Software Development Industries',
            description: 'I am has experience in IT, enabling me to deliver high-quality solutions on time and with full attention to your needs.'
            },
            {
            title: 'E-commerce Development',
            description: 'I specialize in building robust e-commerce platforms that enhance user experience and drive sales.'
            },
            {
            title: 'Real-time Applications',
            description: 'I develop real-time applications that provide instant updates and seamless interactions, perfect for chat apps and live dashboards.'
            },
            {
            title: 'Lms Development',
            description: 'I create Learning Management Systems (LMS) that facilitate online education with interactive features and user-friendly interfaces.'
            },
            {
            title: 'Blog , Forum, and Community Platforms',
            description: 'I build engaging blog, forum, and community platforms that foster interaction and content sharing among users.'
            },
            {
            title: 'Admin Panels and Dashboards',
            description: 'I design intuitive admin panels and dashboards that provide comprehensive control and insights into application performance.'
        }
        ]

    )

    const [isVisible, setIsVisible] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    const isVisibleHandler = (index: number) => {
        setIsVisible(index);
    }

    const scrollTos = (scrolpx:number) => {
        console.log(scrolpx);
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: scrolpx, 
                behavior: 'smooth',
            });
        }
    }
    return (
        <div>
            <h3 className={s.CardCounter}>0{isVisible+1}/06</h3>
            <section ref={scrollRef} className={s.TechnologiesContainer} >
                
                    {Technologies.map((item, index) => (
                        <div key={index}>
                            
                            {isVisible === index ? 
                            <Card item = {item} index = {index} visibilitty = {true} isVisibleHandler ={isVisibleHandler} scrollTos = {scrollTos}/>
                            :  
                            <Card item = {item} index = {index} visibilitty = {false} isVisibleHandler ={isVisibleHandler} scrollTos = {scrollTos}/>}
                        </div>
                    ))}
            </section>
        </div>
    )    
}

export default Technologies;