<script setup>

import { onMounted } from 'vue'

onMounted(() => {     

	$('.homepage-slides').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 2000,
		slideSpeed: 600,
		animateOut: 'fadeOut',
		navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: false,
			},
			600: {
				items: 1,
				nav: false,
				dots: false,
			},
			768: {
				items: 1,
				nav: false,
				dots: false,
			},
			1100: {
				items: 1,
				nav: true,
				dots: false,
			}
		}
	});


	$(".homepage-slides").on("translate.owl.carousel", function () {
		$(".single-slide-item h1").removeClass("animated fadeInUp").css("opacity", "1");
		$(".single-slide-item h6").removeClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item p").removeClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item a.main-btn").removeClass("animated fadeInDown").css("opacity", "1");
	});

	$(".homepage-slides").on("translated.owl.carousel", function () {
		$(".single-slide-item h1").addClass("animated fadeInUp").css("opacity", "1");
		$(".single-slide-item h6").addClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item p").addClass("animated fadeInDown").css("opacity", "1");
		$(".single-slide-item a.main-btn").addClass("animated fadeInDown").css("opacity", "1");
	});
  
});

</script>

<template>
    <div>
		<div class="breadcroumb-area bread-bg">
    <div class="hero-area-content">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-6 wow fadeInUp animated" data-wow-delay=".2s">
                    <div class="section-title">
                        <h1>IMPULSA TUS VENTAS</h1>
                        <h3>Lleva tu negocio al siguiente nivel</h3>
                        <p>Descubre cómo nuestra solución de atención al cliente multi-empresa  puede transformar la forma en que gestionas tus productos, servicios y clientes. Con Smart Sales, maximiza la eficiencia y mejora la experiencia de tus clientes con herramientas avanzadas de automatización e integración.</p>
                       <button class="main-btn">contáctanos</button>
                    </div>
                </div>
                <div class="col-lg-6 text-right wow fadeInUp animated" data-wow-delay=".4s">
                    <img src="/assets/resourcomp/Floating-Robot.png" alt="Robot" class="robot-image">
                </div>
            </div>
        </div>
    </div>
</div>
 	</div>
</template>


<style scoped>
@import '../../../public/assets/css/responsive.css';
</style>