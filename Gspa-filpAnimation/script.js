const scroller=new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth:true,
});

gsap.registerPlugin(Flip);
CustomEase.create("cubic","0.83,0,0.17,1");

const gallery = document.querySelector(".img-gallery-container");
const images=gsap.utils.toArray(".img");
let rotationValues = [10,-5,2,-2];

let isFlipped = false;

function applyRotation(){
    images.forEach((img,index)=>{
        const rotation = isFlipped ? 0 : rotationValues[index];
        gsap.to(img,{
            rotate: rotation,
            duration:2,
            ease:"cubic",
            delay:0.155,

        });
    });
}

document.querySelector(".btn").addEventListener

// 9.4//