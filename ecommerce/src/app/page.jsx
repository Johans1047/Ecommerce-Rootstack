import Header from "@/components/Header";
import Block from "@/components/Block";
import Search from "@/components/Search";
import Footer from "@/components/Footer";
import Parallax from "@/components/Parallax";

export default function Home() {

    const bienvenida = "Explora Panamá y conecta con su auténtica esencia. Cada viaje es una oportunidad para descubrir paisajes únicos, vivir la riqueza de nuestras tradiciones y apoyar a las comunidades locales."
    const despedida = "Viajar no es solo ver nuevos lugares, es ser parte de lo que nos hace únicos. Descubre, comparte y fortalece el espíritu de Panamá junto a nosotros."
    return (
        <>
        <Header/>
        <Search />
        <Parallax classString="custom-img" title="Bienvenido a VoyageXplore" content={bienvenida}/>
        <Parallax classString="custom-img2" title="Diviértete con VoyageXplore" content={despedida}/>
        <Block />
        <Footer />
        </>
    );
}