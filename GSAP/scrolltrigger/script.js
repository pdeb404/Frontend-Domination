gsap.to("#page1 #box",{
    scale:2,
    rotate:360,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        markers:true,
        scrub:2,
    }
})
gsap.to("#page2 #box",{
    scale:2,
    rotate:360,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        start:"top 60%",
        markers:true,
        scrub:2
    }
})
gsap.from("#page3 #box",{
    scale:0.5,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        scrub:2
    }
})