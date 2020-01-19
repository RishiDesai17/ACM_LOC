const blink = () => {
    const x = document.getElementById("blink");
    setInterval(()=>{
        x.style.visibility = (x.style.visibility=="hidden"?"visible":"hidden")
    },500);
}
