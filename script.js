function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop (value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect () {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}


locoScroll();

function cursorEffect(){
    let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.pageX +20}px, ${e.pageY +20}px) translate(-50%, -50%)`;

})

}
cursorEffect()

function timeline(){
    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section1 h1",
            scroller: ".main",
            start: "top 40%",
            end: "top -30%",
            scrub: 2
        }
    })
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section1 video",
            scroller: ".main",
            start: "top -10%",
            end: "top -20%",
            scrub: 3
        }
    })
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2 h1",
            scroller: ".main",
            start: "top 0%",
            end: "top -50%",
            scrub: 3
        }
    })
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3 .part2",
            scroller: ".main",
            start: "top 20%",
            end: "top -50%",
            scrub: 3
        }
    })
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3 .part2",
            scroller: ".main",
            start: "top 0%",
            end: "top -10%",
            scrub: 3
        }
    })
    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section4",
            scroller: ".main",
            start: "top -50%",
            end: "top -150%",
            scrub: 3
        }
    })
    tl1.to(".section1 h1", ({
        x: "-100"
    
    }), "anim")
    
    tl1.to(".section1 h2", ({
        x: "100"
    }), "anim")
    
    tl1.to(".section1 .video", ({
        scale: 1
    }), "anim")
    
    tl2.to(".main", ({
        backgroundColor: "#EFEFF2",
        color: " #0f0d0d"
    }))
    tl2.to(".section2", ({
        opacity: 1
    }))
    tl3.to(".section2 span", ({
        width: "100%"
    }))
    tl4.to(".section3 span", ({
        width: "100%",
        backgroundColor: " #EFEFF2"
    }))
    
    tl5.to(".main", ({
        backgroundColor: "#0f0d0d",
        color: " #EFEFF2"
    }))
    
    tl6.to(".section4 span", ({
        width: "90%",
    }))
}
timeline()

function section5Animation() {
    let boxes = document.querySelectorAll(".box");
let cursor = document.querySelector(".cursor");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
    //     cursor.style.left = e.x  + "px";
    //     cursor.style.top = e.x + "px";
    // cursor.style.transform = `translate(-50%, -50%)`;

        let image = box.getAttribute("data-image");
        
        cursor.style.backgroundColor = "#EFEFF2";
        cursor.style.width = "350px";
        cursor.style.height = "400px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${image})`
    })
    box.addEventListener("mouseleave", () => {
        cursor.style.width = "20px";
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = `none`
        cursor.style.backgroundColor = "#DEB2F2";
    })
})
}
section5Animation()

var list = document.querySelectorAll(".nav ul li")
var purple = document.querySelector("#purple")
var home = document.querySelector(".home")
var nav = document.querySelector("nav")
list.forEach(function(item) {
    item.addEventListener("mouseenter",function(){
        purple.style.display="block"
        purple.style.opacity="1"
        home.style.opacity="1"
    })
    item.addEventListener("mouseleave",function(){
        purple.style.display="none"
        purple.style.opacity="0"
        home.style.opacity="0"
    })

})