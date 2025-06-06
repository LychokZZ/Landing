import s from './Info.module.scss';

const Info = () =>{
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
                <div className={s.SwapAnimation}>
                    <div className={s.FirstRoll}>
                        <h3 className={s.SmallText}>Professional experience</h3>
                        <h1 className={s.BigText}>2+ year</h1>
                    </div>
                    <div className={s.SecondRoll}>
                        <h3 className={s.SmallText}>Successful projects</h3>
                        <h1 className={s.BigText}>10+</h1>
                    </div>
                    <div className={s.ThreetRoll}>
                        <h3 className={s.SmallText}>Clients from worldwide</h3>
                        <h1 className={s.BigText}>10+</h1>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default Info;