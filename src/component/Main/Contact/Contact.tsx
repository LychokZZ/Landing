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

    const Submitte =() => {
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
                    <button onClick={()=>Submitte()} className={s.ButtonContact}>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;