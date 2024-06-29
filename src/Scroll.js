function Scroll(){
    const scroll=()=>{
        window.scrollTo({
            left:0,
            top:0,
            behavior:"smooth"
            
        });
    }

    return(
<>

<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16"
 data-aos="zoom-out-down"  data-aos-duration="3000" variant="outline-light" className="btnscroll" onClick={scroll}>
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
</svg>

</>
    )
}
export default Scroll;