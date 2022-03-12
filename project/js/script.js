console.log("hello world! ooo");

var p=document.getElementById("souq");
var str='SOUQ'
var cout=0;
var intervall=setInterval(function(){
    
    if(cout>3){
        p.innerText="";
        //clearInterval(intervall);
          cout=0;
        // p.innerText+=str[cout] 
     }
    
  p.style.fontSize='57px';
    p.style.color= 'red';
     p.style.fontFamily='Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans';
     p.style.textShadow =  "3px 3px  rgba(34, 26, 26, 0.603)";
    //  p.style.textDecoration =  'underline';
    
    p.innerText+=str[cout];
 cout++;
 

},800)
function gotohome(){
  location.href="page1.html";
}
function scrollup() {
	var elmnt = document.getElementById("bodyy");
	elmnt.scrollTop = 0;
  }
