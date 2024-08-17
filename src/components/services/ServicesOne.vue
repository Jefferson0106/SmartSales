<script setup>

import { onMounted, ref, onUpdated } from 'vue'

import axios from "axios";

const services = ref([]);

onMounted(async () => {
  const { data: fetchedServices } = await axios.get("/data/services.json");
  services.value = fetchedServices.services;
});

onUpdated(() => {     

		// Service Slider    
        $(".service-slider").owlCarousel({
		loop: true,
		items: 3,
		dots: true,
		nav: false,
		smartSpeed: 1000,
		autoHeight: false,
		touchDrag: true,
		mouseDrag: true,
		margin: 30,
		autoplay: true,
		slideSpeed: 600,
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: false,
			},
			600: {
				items: 2,
				nav: false,
				dots: false,
			},
			768: {
				items: 2,
				nav: false,
				dots: false,
			},
			1100: {
				items: 3,
				nav: false,
				dots: true,
			}
		}
	});
  
});

</script>

<template>
    <div class="services-area gray-bg section-padding pad-bot-90">
		<div class="container">
 			<div class="row">
 				<div class="col-lg-6 col-md-12 col-sm-12">
 					<div class="section-title">
 						<!----h6>Features</h6> --->
 						<h2 class="h2-facturacion"><span class="punto"></span>Gestiona tus productos y servicios</h2>
						<p class="parrafo-facturacion">Centraliza y organiza toda la información relevante sobre tus productos y servicios. Con Smart Sales, puedes registrar y administrar fácilmente tu inventario, asegurando que tus clientes siempre tengan acceso a la información más actualizada.</p>
 					</div>
 									
 				</div>
 				<div class="col-lg-6 col-md-12 col-sm-12">
 					<div class="feature-image">
 						<img src="/assets/resourcomp/boxes2.png" alt="">
 					</div>
 				</div>
 			</div>
 		</div>

 			<!---div class="row mt-30">
 				<div class="col-lg-12">
 					<div class="service-slider owl-carousel">
 						<div class="single-service-area"
						v-for="service in services.slice(0,6)" :key="service.id"
						>
 							<div class="service-icon">
 								<i :class="service.icon"></i>
 							</div>
 							<h5>{{ service.title }}</h5>
 							<p>{{ service.content }}</p>
 							<router-link :to="{name:'service-details'}" class="read-more">Read More</router-link>
 						</div> 						
 					</div>
 				</div>
 			</div>--->
 	</div>
</template>

<style scoped>
@media (max-width: 768px) {
	.gray-bg .h2-facturacion {
		text-align: center;
	white-space: nowrap;
	font-size: 20px;
}
.gray-bg .parrafo-facturacion{
	text-align: center;
}
.gray-bg .feature-image{
	width: 60%;
	position: relative;
	top: -100px;
	left: 50px;
	
}


}
</style>