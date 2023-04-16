

console.log('welcome to java script');
let songindex=0;
let keyplay=document.getElementById('keyplay');
let mysongbar=document.getElementById('songbar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'))
let songs=[
    {songname:"Namo-Namo-Ji-Shankara" ,filepath:"images/1.mp3", coverpath:"images/covers/1.jpg"},
    {songname:"childhood" ,filepath:"images/2.mp3" ,coverpath:"images/covers/2.jpg"},
    {songname:"kese hua" ,filepath:"images/3.mp3" ,coverpath:"images/covers/3.jpg"},
    {songname:"khairiyat pucho" ,filepath:"images/4.mp3" ,coverpath:"images/covers/4.jpg"},
]
let audioelement= new Audio('images/1.mp3')

songitems.forEach((element,i)=>{
    console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverpath
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname

})

keyplay.addEventListener('click',()=>{


    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        keyplay.classList.remove('fa-play-circle');
        keyplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        keyplay.classList.remove('fa-pause-circle');
        keyplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioelement.addEventListener('timeupdate',()=>{

    console.log('timeupdate')
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progress)
    mysongbar.value=progress

})
mysongbar.addEventListener("change",()=>{
    audioelement.currentTime=((mysongbar.value *audioelement.duration)/100)

})
const makeAllPlays=()=>{
    element.target.classList.remove("fa-pause-cirle")
    element.target.classList.add("fa-play-cirle")
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{


})
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{




    element.addEventListener("click",(e)=>{
      
        makeAllPlays
        e.target.classList.remove("fa-play-cirle")
        e.target.classList.add("fa-pause-cirle")
        audioelement.src="images/2.mp3"
        audioelement.currentTime=0
        audioelement.play();
    })

})
