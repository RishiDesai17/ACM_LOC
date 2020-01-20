let i=0;
let count=0;
let txt = "CODE ";
let flag= true;
let flip=false;
// const fn = () => {
//     const typing = () => {
//         if (i < txt.length) {
//           document.getElementsByClassName("initial")[0].innerHTML += txt.charAt(i);
//           i++;
//           setTimeout(typing, 150);
//         //   if(i==8){
//         //       document.getElementsByClassName("initial")[0].innerHTML="LINES "
//         //       txt="OF WIT"
//         //       i=0
//         //       if (i < txt.length) {
//         //         document.getElementsByClassName("initial")[0].innerHTML += txt.charAt(i);
//         //         i++;
//         //         setTimeout(typing, 150);
//         //       }
//         //   }
//         //   console.log("abcd")
//         //   count++;
//         }
//         else{
//             const x = document.getElementById("blink");
//             setInterval(()=>{
//                 x.style.visibility = (x.style.visibility=="hidden"?"visible":"hidden")
//             },500);
//         }
//     }
//     typing();
    
// }
const fn1 = () => {
    setInterval(()=>{
        const typing = () =>{
            if (i < txt.length) {
                document.getElementsByClassName("initial")[0].innerHTML += txt.charAt(i);
                i++;
                setTimeout(typing, 150);
            }
        }
        typing();
        if(txt.length==i){
            let k=0;
            flag=!flag;
            // setInterval(()=>{
            //     document.getElementsByClassName("initial")[0].innerHTML = document.getElementsByClassName("initial")[0].innerHTML.substring(0,document.getElementsByClassName("initial")[0].innerHTML.length-k);
            //     k++;
            //     flip=true;
            // })
            document.getElementsByClassName("initial")[0].innerHTML = "LINES OF "
            i=0;
            if(flag){
                txt="CODE "
            }
            else{
                txt="WIT "
            }
        }
    },850)
}
var coll = document.getElementsByClassName("collapsible");
var j;

for (j = 0; j < coll.length; j++) {
  coll[j].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}