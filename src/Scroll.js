import { HiArrowCircleUp } from "react-icons/hi";
function Scroll() {
    const scroll = () => {
        window.scrollTo({
             top: 0,
            behavior: "smooth"

        });
    }

    return (
        <>


            <HiArrowCircleUp className="btnscroll" onClick={scroll} />

        </>
    )
}
export default Scroll;