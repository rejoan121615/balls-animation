"use strict";

gsap.registerPlugin(CustomEase)


const tl = gsap.timeline();
tl.from(".left__half__circle", {
    y: 400,
    duration: 1,
})
    .fromTo(
        ".left__half__two",
        {
            y: 0,
        },
        {
            y: -5,
            ease: "easeIn",
            repeat: 1,
            yoyo: true,
            duration: 0.3,
        }
).to('.medium__balls', {
    opacity: 1,
    duration: 0.1
}).to(".medium__balls", {
    y: 350,
    duration: 1,
    ease: Bounce
    });