const largura = window. screen. width;
console.log(largura);

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;
 
function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0 ;
    }
    if(largura <= 360){
        imgs.style.transform = `translateX(${-idx * 150}px)`;
    }else if(largura <= 480){
        imgs.style.transform = `translateX(${-idx * 230}px)`;
    }else if(largura <= 768){
        imgs.style.transform = `translateX(${-idx * 300}px)`;
    }else if(largura <= 1024){
        imgs.style.transform = `translateX(${-idx * 450}px)`;  
    }else if(largura <= 1200){
        imgs.style.transform = `translateX(${-idx * 450}px)`;
    }  
    
}

setInterval(carrossel, 1800);