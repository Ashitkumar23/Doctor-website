import Contact_form from "../Components/Contact-form/Contact_form";
import DownloadApp from "../Components/Download-app/DownloadApp";
import Faq from "../Components/Faq/Faq";
import Main from "../Components/Featured/Main";
import Footer from "../Components/Footer/Footer";
import Hero_sec from "../Components/hero-section/Hero_sec";
import Top from "../Components/hero-section/Top";
import Join from "../Components/Join our circle/Join";
import Auyerjedic from "../Components/Why-Aurvedic/Auyerjedic";
import Why_us from "../Components/why-us/Why_us";

export default function Home(){
    return(
        <>
        <Top/>
        <Hero_sec/>
        <Main/>
        <Why_us/>
        <Join/>
        <Auyerjedic/>
        <Faq/>
        <DownloadApp/>
        <Contact_form/>
        <Footer/>
        </>
    )
}