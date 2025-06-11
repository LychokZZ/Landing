'use client'
import { useState } from 'react';
import s from './Contact.module.scss';

const Contact = () => {
    const [form, setForm] = useState({
        Fullname : '',
        Email : '',
        Country: '',
        Interes: '',
        Message: '',
    })
    const [Ready,setReady] = useState(false)
    const [load , setLoad] = useState(true)

    const Revie = async() => {
        const res = await fetch('https://landingserver-lag0.onrender.com/contact',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ Fullname : form.Fullname , Email: form.Email ,Country: form.Country, Interes: form.Interes , Message: form.Message }),
            })
    }
    const waint = () => {
        setLoad(true)
        setTimeout(()=>{
            setReady(true)
            setLoad(true)
        },90000)
        alert('Please wait start server. It deploy on render and have sleep time , please waint 90 seconds)')
    }

    const Submitte =() => {
        Revie()
        alert('Thank you, we will contact you soon.')
        setForm({
            Fullname : '',
            Email : '',
            Country: '',
            Interes: '',
            Message: '',
        })

    }
    return (
        <div className={s.ContactContainer}>
            <div className={s.InfoContact}>
                <h1 className={s.Introduction}>Let’s build something great together!</h1>
                <p className={s.ContactDiscription}>Fill out the form below so i can get in touch with you within a few days. We will analyze your request and come back with fresh ideas. We are delighted by your presence.</p>
            </div>
            <div className={s.ContactForm}>
                <div className={s.FlexUpForm}>
                    <div>
                        <input className={s.Input} value={form.Fullname} onChange={(e) => setForm(prev => ({ ...prev, Fullname: e.target.value }))} placeholder='Enter you full name'></input>
                        <input className={s.Input} value={form.Email} onChange={(e) => setForm(prev => ({ ...prev, Email: e.target.value }))} placeholder='Enter you E-mail address'></input>
                    </div>
                    <div>
                        <input className={s.Input} value={form.Country} onChange={(e) => setForm(prev => ({ ...prev, Country: e.target.value }))} placeholder='Enter you country'></input>
                        <input className={s.Input} value={form.Interes} onChange={(e) => setForm(prev => ({ ...prev, Interes: e.target.value }))} placeholder='What you interest?'></input>
                    </div>
                </div>
                <div className={s.AreaBut}>
                    <textarea className={s.AreaInput} value={form.Message} onChange={(e) => setForm(prev => ({ ...prev, Message: e.target.value }))} placeholder='What you interest?'></textarea>                    
                    {Ready ?<button onClick={()=>Submitte()} className={s.ButtonContact}>Contact</button> : <button onClick={()=>waint()} className={load ? s.ButtonContact : s.ButtonContactWait}>I'm ready</button>}
                </div>
            </div>
        </div>
    )
}

export default Contact;