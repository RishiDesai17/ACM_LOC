let i=0;
const fn = () => {
    const typing = () => {
        const txt = "OF CODE ";
        if (i < txt.length) {
          document.getElementsByClassName("initial")[0].innerHTML += txt.charAt(i);
          i++;
          setTimeout(typing, 150);
        }
        else{
            const x = document.getElementById("blink");
            setInterval(()=>{
                x.style.visibility = (x.style.visibility=="hidden"?"visible":"hidden")
            },500);
        }
    }
    typing();
    
}

