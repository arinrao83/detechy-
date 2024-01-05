function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
init()



gsap.from("#up1 h1",{
  y:500,
  duration:1,
  rotate:25
})


// gsap.from("#nav",{
//   y:-300,
//   duration:1,
//   rotate:25
// })

var tl = gsap.timeline()

tl.from("#up2 h1",{
  y:500,
  duration:1,
  rotate:25

})

.from("#up3 h1",{
  y:500,
  duration:1,
  rotate:25

})



document.querySelector("#page1").addEventListener("mousemove",function(dets){
  document.querySelector("#clip").style.clipPath = `circle(50px at ${dets.x}px  ${dets.y}px)`
  // gsap.to("#clip",{
  //   clipPath : `circle(50px at ${dets.x}px  ${dets.y}px)`,
    
  // })
})



document.querySelector("#page1").addEventListener("mouseleave",function(dets){
  document.querySelector("#clip").style.clipPath = `circle(0px at ${dets.x}px  ${dets.y}px)`
  
  
})


document.querySelector("#page1").addEventListener("mouseenter",function(dets){
  // document.querySelector("#clip").style.clipPath = `circle(50px at ${dets.x}px  ${dets.y}px)`
  gsap.to("#clip",{
    clipPath : `circle(50px at ${dets.x}px  ${dets.y}px)`,
    delay:0.01
  })
  
})



document.querySelector("#up1").addEventListener("mousemove",function(dets){
  gsap.to("#clip",{
    clipPath : `circle(120px at ${dets.x}px  ${dets.y}px)`,
    delay:0.01
  })
})


document.querySelector("#up1").addEventListener("mouseleave",function(dets){
  gsap.to("#clip",{
    clipPath : `circle(50px at ${dets.x}px  ${dets.y}px)`,
    delay:0.01
  })
})


document.querySelector("#up2").addEventListener("mousemove",function(dets){
  gsap.to("#clip",{
    clipPath : `circle(120px at ${dets.x}px  ${dets.y}px)`,
    delay:0.01
  })
})


document.querySelector("#up2").addEventListener("mouseleave",function(dets){
  gsap.to("#clip",{
    clipPath : `circle(50px at ${dets.x}px  ${dets.y}px)`,
    delay:0.01
  })
})


document.querySelector("#up3").addEventListener("mousemove",function(dets){
  gsap.to("#clip",{
    clipPath : `circle(120px at ${dets.x}px  ${dets.y}px)`,
    delay:0.01
  })
})


document.querySelector("#up3").addEventListener("mouseleave",function(dets){
  gsap.to("#clip",{
    clipPath : `circle(50px at ${dets.x}px  ${dets.y}px)`,
    delay:0.01
  })
})


document.querySelector("#nav").addEventListener("mouseleave",function(dets){
  document.querySelector("#clip").style.clipPath = `circle(50px at ${dets.x}px  ${dets.y}px)`
  
  
})


document.querySelector("#nav").addEventListener("mouseenter",function(dets){
  // document.querySelector("#clip").style.clipPath = `circle(50px at ${dets.x}px  ${dets.y}px)`
  // gsap.to("#clip",{
  //   clipPath : `circle(0px at ${dets.x}px  ${dets.y}px)`,
  //   delay:0.01
  // })

  document.querySelector("#clip").style.display = "none"
  
})


document.querySelector("#nav").addEventListener("mouseleave",function(dets){
  // document.querySelector("#clip").style.clipPath = `circle(50px at ${dets.x}px  ${dets.y}px)`
  document.querySelector("#clip").style.display = "block"
  
  
})


document.querySelector(".icon").addEventListener("mouseenter",function(dets){
  // document.querySelector("#clip").style.clipPath = `circle(50px at ${dets.x}px  ${dets.y}px)`
  gsap.to("#clip",{
    clipPath : `circle(0px at ${dets.x}px  ${dets.y}px)`,
    delay:0.01
  })
  
})

var icon = document.querySelectorAll(".icon")
var shadow = document.querySelector("#shadow")

icon.forEach(function(val,index){
  val.addEventListener("mouseover",function(){
    shadow.style.transform = `translateX(${index*102}px)`

  })
})



document.querySelector("#bigemoji").addEventListener("mousemove",function(dets){
  document.querySelector("#emoji").style.right = `${dets.x *.05}px`
  document.querySelector("#emoji").style.bottom = `${dets.y *.05}px`
  document.querySelector("#emoji").style.scale= `1.2`
})

document.querySelector("#bigemoji").addEventListener("mouseleave",function(dets){
  document.querySelector("#emoji").style.right = `2rem`
  document.querySelector("#emoji").style.bottom = `2rem`
  document.querySelector("#emoji").style.scale= `1`

})


document.querySelector("#bigemoji").addEventListener("mouseenter",function(dets){
  // document.querySelector("#clip").style.clipPath = `circle(50px at ${dets.x}px  ${dets.y}px)`
  // gsap.to("#clip",{
  //   clipPath : `circle(0px at ${dets.x}px  ${dets.y}px)`,
  //   delay:0.01
  // })

  document.querySelector("#clip").style.display = "none"
  
})


document.querySelector("#bigemoji").addEventListener("mouseleave",function(dets){
  // document.querySelector("#clip").style.clipPath = `circle(50px at ${dets.x}px  ${dets.y}px)`
  document.querySelector("#clip").style.display = "block"
  
  
})


document.querySelector("#string1").addEventListener("mousemove",function(dets){
  var path2 =`M 10 80 Q 715 ${dets.y*.3} 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Power4,
    duration:.2
  })

})


document.querySelector("#string1").addEventListener("mouseleave",function(){
  var path2 =`M 10 80 Q 715 80 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Bounce,
    duration:.2

  })
})


document.querySelector("#string2").addEventListener("mousemove",function(dets){
  var path2 =`M 10 80 Q 715 ${dets.y*.3} 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Power4,
    duration:.2
  })

})


document.querySelector("#string2").addEventListener("mouseleave",function(){
  var path2 =`M 10 80 Q 715 80 1430 80`;
  gsap.to("path",{
    attr: {d: path2},
    ease: Bounce,
    duration:.2

  })
})



gsap.from("#string1",{
  width:0,
  duration:2,
  // rotate:25
})

gsap.from("#string2",{
  width:0,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    start:"-70% top",
    end:"-50% top",
    scrub:3

  }
})


gsap.from("#page2 video",{
  scale:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    // markers:true,
    start:"top top",
    end:"50% top",
    pin:true,
    scrub:3
  }
})


// function counter() {
//   var count1 = document.querySelector("#count")
//   count1.style.animationDuration = "2s"
//   var count = setInterval(function () {
//       var c = parseInt($('#counter').text());
//       $('#counter').text((++c).toString());
//       if (c == 100) {
//           clearInterval(count);
//       }
//   })
// }
// counter()

gsap.to("#loader",{
  height:0,
  delay:3
})

