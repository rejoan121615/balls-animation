"use strict";

gsap.registerPlugin(CustomEase);
CustomEase.create(
    "bounce",
    "M0,0 C0,0 0.13,0.53 0.532,0.53 0.911,0.53 1,0 1,0 "
);
CustomEase.create(
    "gofast",
    "M0,0 C0,0 0.843,0.373 0.948,0.736 1,0.916 1,1 1,1 "
);
CustomEase.create(
    "forwardBounce",
    "M0,0 C0,0 0.135,0.527 0.388,0.778 0.64,1.028 1,1 1,1 "
);

const ballWithHalf = gsap.utils.toArray(".medium__balls", ".left__half__two");

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
            duration: 0.25,
        }
    )
    .to(".medium__balls", {
        opacity: 1,
        duration: 0.2,
        ease: "bounce",
    })
    .fromTo(
        ".medium__balls",
        {
            y: 0,
        },
        {
            y: 350,
            x: -20,
            duration: 1.4,
            ease: "bounce.out",
        }
    )
    .to(".left__half__two", {
        rotate: -15,
        y: "+=33",
    })
    .to(
        ".medium__balls",
        {
            y: "-=2",
        },
        "<"
    )
    .to(
        ".medium__balls",
        {
            x: "-=149",
            y: "+=40",
            duration: 2.3,
        },
        "-=0.4"
    )
    .to(
        ".medium__balls",
        {
            x: "-=20",
            y: "+=25",
            duration: 1,
        },
        "-=0.3"
    )
    .to(
        ".medium__balls",
        {
            x: "-=30",
            y: "+=180",
            ease: "bounce.out",
            duration: 2,
        },
        "-=0.2"
    )
    .to(
        ".left__half__two",
        {
            rotate: 0,
            y: "0",
            duration: 1,
        },
        "-=1.65"
    )
    .to(".medium__balls", {
        x: "-=860",
        duration: 2,
        ease: "linear",
    })
    .fromTo(
        ".killer__hole",
        {
            scale: 0,
        },
        {
            scale: 1,
            duration: 0.6,
        },
        "-=2"
    )
    .to(
        ".medium__balls",
        {
            x: "-=150",
            y: "+=150",
            duration: 0.8,
        },
        "-=0.2"
    )
    .to(".killer__hole", {
        scale: 0,
        duration: 1,
        ease: "bounce.out",
    })
    .fromTo(
        ".left__half__circle",
        {
            y: 0,
        },
        {
            y: 400,
            duration: 1.2,
            delay: 0.2,
        }
    )
    .fromTo(
        ".left__half__hole__circle",
        {
            y: 400,
        },
        {
            y: 0,
            duration: 1.2,
        },
        "<"
    )
    .to(".left__half__hole__circle", {
        x: "+=189",
    })
    .to(".left__half__hole__circle", {
        y: 125,
        duration: 0.4
    });