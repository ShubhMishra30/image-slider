// Array and it's elements in the form of images URL in the below section:

const images = ["https://i.pinimg.com/736x/9a/48/d8/9a48d89c8f92a7efa2237946bda5700d.jpg",
    "https://i.pinimg.com/736x/03/b9/a6/03b9a6dcf65a8d00138aba52417e8ec0.jpg",
    "https://i.pinimg.com/736x/96/c5/08/96c508278c88152394604e4e7aaaef55.jpg",
    "https://i.pinimg.com/736x/1e/d0/8d/1ed08dd5badc812b4e782f1e3f68b0bd.jpg",
    "https://i.pinimg.com/736x/d4/1a/52/d41a52dab486f3c269bd73b6a45dbf3e.jpg"
]
let s1 = document.getElementById("cntr");
let prv = document.getElementById("prev");
let nxt = document.getElementById("next");
let i = 4;                                          //previous button code :
prv.addEventListener("click",function(){
    if(i==4) {
        s1.innerHTML = `<img src=${images[i]}>`;
        i = 3;
    }
    else if(i==3) {
        s1.innerHTML = `<img src=${images[i]}>`;
        i = 2;
    }
    else if(i==2) {
        s1.innerHTML = `<img src=${images[i]}>`;
        i = 1;
    }
    else if(i==1) {
        s1.innerHTML = `<img src=${images[i]}>`;
        i = 0;
    }
    else if(i==0){
        s1.innerHTML = `<img src=${images[i]}>`;
        i = 4;
    }
},i*2000);
prv.addEventListener("mouseleave",function(){
    
});

nxt.addEventListener("click",function(){                    // Next button code below :
    if(i==0) {
        s1.innerHTML = `<img src=${images[i]}>`;
        i = 1;
    }
    else if(i==1) {
        s1.innerHTML = `<img src=${images[i]}>`;
        i = 2;
    }
    else if(i==2) {
        s1.innerHTML = `<img src=${images[i]}>`;
        i = 3;
    }
    else if(i==3) {
        s1.innerHTML = `<img src=${images[i]}>`;
        i = 4;
    }
    else if(i==4){
        s1.innerHTML = `<img src=${images[i]}>`;
        i = 0;
    }
},i*2000);
nxt.addEventListener("mouseleave",function(){

});