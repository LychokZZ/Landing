import s from './AdditionalText.module.scss';
const AddirionalText = () =>{
    return (
        <div className={s.AddirionalTextContainer} >
            <div className={s.TextContainer}>
                <h1 className={s.Professional}>Professional</h1>
                <h1 className={s.Software}>Software</h1>
                <h1 className={s.Development}>Development</h1>
            </div>
            <div className={s.BackWord}>
                <h1 className={s.web}>WEB</h1>
                <h1 className={s.product}>PRODUCT</h1>
                <h1 className={s.qa}>QA</h1>
                <h1 className={s.fullstack}>FULLSTACK</h1>
                <h1 className={s.dev}>DEV</h1>
                <h1 className={s.design}>DESIGN</h1>
            </div>
        </div>
    )    
}

export default AddirionalText;