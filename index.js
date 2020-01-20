let i=0;
let txt = "CODE ";
let flag= true;
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

const words = ["CODE ", "WIT "];
let a = 0;
let timer;

function typingEffect() {
	let word = words[a].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 500);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[a].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (a + 1)) {
				a++;
			} else {
				a = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};

typingEffect();