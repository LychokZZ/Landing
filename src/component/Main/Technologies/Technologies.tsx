'use client';
import { useState } from 'react';
import s from './Technologies.module.scss';

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
    return (
        <section className={s.TechnologiesContainer} >
                {Technologies.map((item, index) => (
                    <div className={s.TechnologyItem} key={index}>
                        <h1 className={s.Title}>{item.title}</h1>
                        <p className={s.Description}>{item.description}</p>
                    </div>
                ))}
        </section>
    )    
}

export default Technologies;