
import Header from "@/component/Header/Header";
import ProductHeader from "@/component/Main/ProductHeader/ProductHeader";
import Info from "@/component/Main/Info/Info";
import Technologies from "@/component/Main/Technologies/Technologies";
import Cases from "@/component/Main/Cases/Cases";
import Contact from "./Contact/Contact";

import s from './Main.module.scss';
import Footer from "../Footer/Footer";


const Main = () =>{
    return (
        <main className={s.MainContainer}>
            <Header />
            <ProductHeader />
            <Info />
            <Technologies />
            <Cases />
            <footer>
                <Contact />
            </footer>
            <Footer />
        </main>
    )    
}

export default Main;