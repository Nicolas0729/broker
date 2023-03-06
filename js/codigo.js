$('.carousel_brok').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout:3000,
    margin: 20,
    autoplayHoverPause: true,
    responsive:{
        300:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1000:{
            items:4
        },
        1350:{
            items:4
        }
    }
})

$('.carousel_rows').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout:3000,
    margin: 20,
    autoplayHoverPause: true,
    responsive:{
        300:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1000:{
            items:3
        },
        1350:{
            items:3
        }
    }
})

$('.carousel_marcas').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout:1500,
    margin: 50,
    autoplayHoverPause: true,
    responsive:{
        300:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:4
        },
        1000:{
            items:5
        },
        1350:{
            items:5
        }
    }
})

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY >154);
})