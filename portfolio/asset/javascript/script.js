

    function dropdown(){
      
    var skill = document.getElementById("langdropdown");
    skill.classList.toggle("langclass");
    var icon =  document.getElementById("langicon");
    icon.classList.toggle("iconlan1");
    // var skillfullbg = document.getElementById("skillsbg") ;
    // skillfullbg.classList.toggle("skillbg1");
    // document.getElementById("techdropdown").style.display= '';
    }
    function droptech(){
        var tech = document.getElementById("techdropdown");
    tech.classList.toggle("techclass");
    var tecicon =  document.getElementById("techicon");
    tecicon.classList.toggle("techlan1");
    // var skillfullbg = document.getElementById("skillsbg") ;
    // skillfullbg.classList.toggle("skillbg1");
    // document.getElementById("langdropdown").style.display='';


    }

    

let a = document.getElementById("fashid");
let b = document.getElementById("allid");
let c = document.getElementById("tripid");
let d = document.getElementById("ecomid");
let e = document.getElementById("fash1id");
let f = document.getElementById("trip1id");


function allfun(){
    a.style.display='block';
    b.style.display='block';
    c.style.display='block';
    d.style.display='block';
    e.style.display='block';
    f.style.display='block';
}
function ecommerce(){
    a.style.display='none';
    b.style.display='none';
    c.style.display='none';
    d.style.display='block';
    e.style.display='none';
    f.style.display='none';

}
function trip(){
    a.style.display='none';
    b.style.display='none';
    c.style.display='block';
    d.style.display='none';
    e.style.display='none';
    f.style.display='block';
}
function fashion(){
    a.style.display='block';
    b.style.display='none';
    c.style.display='none';
    d.style.display='none';
    e.style.display='block';
    f.style.display='none';

}


// let aboutme = document.getElementById("?servicebg");
// let homeof = document.getElementById("home");


// homeof.addEventListener("click",()=> 
// {
//     aboutme.scrollIntoView({behavior:"instant", block:"end"})
// });

// function scrollwin(){
//     window.scrollBy(0,300);
// }
// function home(){
    
// // }
// function about(){
//     window.scrollTo(0,findposition(document.getElementById("servicebg")));
// }

// aboutme.addEventListener("scroll",()=>{
//     homeof.scrollIntoView({behavior:"instant", block:"end"})
// })






// window.addEventListener("scroll",function() {
//     let windscroll =  window.scrollY;
    
//     if (windsscroll >= 400){
//         this.document.querySelector("sectionbg").array.forEach(element => {
            
//         });{
            
//         });
//     }
// }
// )


// var navli = document.getElementById("menubars");
//     var nav = navli.getElementsByClassName("menu");

// for (var i = 0; i<nav.length; i++){
//     nav[i].addEventListener("click", function(){
//         var current =document.getElementsByClassName("active");
//         current[0].className= current[0].className.replace("active","");
//         this.className += "active";
//     }
// )
// }

// function skill(){
    
//     nav.classList.remove(".active");
//     nav.classList.add(".active");

// }

// var navli = document.getElementById("menubars");
//     var nav = navli.getElementsByClassName("menu");


// window.addEventListener("scroll", function(){
//     let windsscroll= window.scrollY;
//     if (windsscroll >= 400){
//         document.querySelectorAll("section").forEach((section, i ) =>{
//             if (section.offsetTop <= windsscroll){
//                 document.querySelector("navli.active")?.classList.remove("active");
//                 this.document.querySelectorAll("navli")[i].classList.add("active");

//             }
//         });
//     }
//     else { add
//        document.querySelector("navli:first-child").classList.add("active");

//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let sections = document.querySelectorAll(".section");
        let navLinks = document.querySelectorAll(".menu a");
        
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");
            
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    document.querySelector(".menu a[href*=" + id + "]").classList.add("active");
                });
            }
        });
    });
});