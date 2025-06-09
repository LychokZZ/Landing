import { FC } from 'react';
import s from '../Technologies.module.scss';


import { SiBmcsoftware } from "react-icons/si";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { CiChat2 } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";

interface Item {
    title: string;
    description: string;
}
interface props {
    item: Item;
    visibilitty: boolean;
    index: number;
    isVisibleHandler: (index: number) => void;
    scrollTos?: (scrolpx: number) => void;
}

const Card:FC<props> = ({item,visibilitty, index ,scrollTos,isVisibleHandler}) => {
    return(
        <div>
            {visibilitty ? 
                <button onClick={()=>isVisibleHandler(index)} className={s.TechnologyItem}>
                    <h1 className={s.Title}>{item.title}</h1>
                    <p className={s.Description}>{item.description}</p>

                    <div className={s.IconContainerVisible}>
                        {index === 0 && <SiBmcsoftware className={s.Icon} />}
                        {index === 1 && <HiOutlineBuildingStorefront className={s.Icon} />}
                        {index === 2 && <IoMdTime className={s.Icon} />}
                        {index === 3 && <LuGraduationCap className={s.Icon} />}
                        {index === 4 && <CiChat2 className={s.Icon} />}
                        {index === 5 && <RiAdminLine className={s.Icon} />}
                    </div>
                </button>
            :
            <button  onClick={()=>{isVisibleHandler(index); scrollTos?.(
                    index === 0 ? 1
                : index === 1 ? 1
                : index === 2 ? 300 
                : index === 3 ? 700 
                : index === 4 ? 1000 
                : index === 5 ? 1000
                : 1
            )}} className={s.TechnologyItemShow}>
                    <h1 className={s.Title}>{item.title}</h1>
                    <p className={s.ClickMe}>Click me!</p>
                    <div className={s.IconContainer}>
                        {index === 0 && <SiBmcsoftware className={s.Icon} />}
                        {index === 1 && <HiOutlineBuildingStorefront className={s.Icon} />}
                        {index === 2 && <IoMdTime className={s.Icon} />}
                        {index === 3 && <LuGraduationCap className={s.Icon} />}
                        {index === 4 && <CiChat2 className={s.Icon} />}
                        {index === 5 && <RiAdminLine className={s.Icon} />}
                    </div>
            </button >
        }
        </div>
    )
}
export default Card;