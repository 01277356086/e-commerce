import Footer from "./Footer";
import Home from "./Home";
import AppNav from "./Nav";
import Products from "./Products";
import Scroll from "./Scroll";
import Container from './Container'
function Allpage() {
    return (
        <>
            <AppNav />
            <Home />
            <Container />
            <Products />
            <Footer />
            <Scroll />
        </>)
}
export default Allpage;