"use strict";
$("#formulario-lista-de-correo").validate({messages: {email: {required: "Campo vacío", email: "No es un correo"}}}), $(".carousel-inner").each(function() {
    1 === $(this).children("div").length && $(this).siblings(".carousel-control, .carousel-indicators").hide()
}), $(".contenido-extra a").tooltip(), $(".owl-carousel, .owl-carousel-relacionado").owlCarousel({pagination: !1, slideSpeed: 800, items: 3, itemsDesktop: [1199, 3], itemsDesktopSmall: [980, 3], itemsTablet: [768, 2], itemsMobile: [479, 1]}), $(".next.1").click(function() {
    $(".owl-carousel.1").trigger("owl.next")
}), $(".prev.1").click(function() {
    $(".owl-carousel.1").trigger("owl.prev")
}), $(".next.2").click(function() {
    $(".owl-carousel.2").trigger("owl.next")
}), $(".prev.2").click(function() {
    $(".owl-carousel.2").trigger("owl.prev")
}), $(".next.3").click(function() {
    $(".owl-carousel.3").trigger("owl.next")
}), $(".prev.3").click(function() {
    $(".owl-carousel.3").trigger("owl.prev")
}), $(".next.cont-rel").click(function() {
    $(".owl-carousel-relacionado").trigger("owl.next")
}), $(".prev.cont-rel").click(function() {
    $(".owl-carousel-relacionado").trigger("owl.prev")
});