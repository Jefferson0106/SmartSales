<script setup>

import { onMounted, ref, onUpdated } from 'vue'

import axios from "axios";

const counter = ref([]);

onMounted(async () => {
  const { data: fetchedCounter } = await axios.get("/data/counter.json");
  counter.value = fetchedCounter.counter;
});

onUpdated(() => {     
    $(".counter-number span").counterUp({
		delay: 10,
		time: 1000,

	});
  
});

</script>


<template>
<section id="counterOne">
	<div class="container">
		<!-- main -->
	   
		<div class="snip1404">
			<h3 class="h3-planes">Vea  Nuestra Varieda De Planes </h3>
	  <div class="plan">
		<header>
		  <h4 class="plan-title">
			Prueba 
		  </h4>
		  <div class="plan-cost"><span class="plan-price">15</span><span class="plan-type">/Días Gratis</span></div>
		</header>
		<ul class="plan-features">
		  <li><i class="ion-checkmark"> </i>Prueba todas las funcionalidades de Smart Sales sin ningún costo durante 15 días.</li>
		  <li><i class="ion-checkmark"> </i>Acceso completo a la integración con GPT-4 y WhatsApp.</li>
		  <li><i class="ion-checkmark"> </i>Gestión de productos y servicios.</li>
		  <li><i class="ion-checkmark"> </i>Automatización de órdenes y pagos.</li>
		  <li><i class="ion-checkmark"> </i>Soporte básico incluido.</li>
	  
		</ul>
		<div class="plan-select"><a href="">Seleciona Plan</a></div>
	  </div>
	  <div class="plan">
		<header>
		  <h4 class="plan-title">
			 
			Básico 
		  </h4>
		  <div class="plan-cost"><span class="plan-price">$50</span><span class="plan-type">/mes</span></div>
		</header>
		<ul class="plan-features">
		  <li><i class="ion-checkmark"> </i>Hasta 5000 mensajes al mes.</li>
		  <li><i class="ion-checkmark"> </i>Integración con GPT-4 y WhatsApp.</li>
		  <li><i class="ion-checkmark"> </i>Gestión completa de productos y servicios.</li>
		  <li><i class="ion-checkmark"> </i>Automatización de órdenes y pagos.</li>
		  <li><i class="ion-checkmark"> </i>Soporte por email.</li>
		  <li><i class="ion-checkmark"> </i>Almacenamiento de conversaciones y datos de contacto.</li>
		</ul>
		<div class="plan-select"><a href="">Seleciona Plan</a></div>
	  </div>
	  <div class="plan featured">
		<header>
		  <h4 class="plan-title">
			 
			Avanzado 
		  </h4>
		  <div class="plan-cost"><span class="plan-price">$80</span><span class="plan-type">/mes</span></div>
		</header>
		<ul class="plan-features">
		  <li><i class="ion-checkmark"> </i>Hasta 10000 mensajes al mes.</li>
		  <li><i class="ion-checkmark"> </i>Todas las funcionalidades del Plan Básico.</li>
		  <li><i class="ion-checkmark"> </i>Soporte prioritario.</li>
		  <li><i class="ion-checkmark"> </i>Reportes avanzados y analíticas de uso.</li>
		  <li><i class="ion-checkmark"> </i>Integración personalizada con la base de datos de productos.</li>
		  <li><i class="ion-checkmark"> </i>Daily Backups</li>
		</ul>
		<div class="plan-select"><a href="">Seleciona Plan</a></div>
	  </div>
	  <div class="plan">
		<header>
		  <h4 class="plan-title">
			 
			Corporativo 
		  </h4>
		  <div class="plan-cost"><span class="plan-price">Contacta</span><span class="plan-type"></span></div>
		</header>
		<ul class="plan-features">
		  <li><i class="ion-checkmark"> </i>Mensajería ilimitada.</li>
		  <li><i class="ion-checkmark"> </i>Soporte dedicado 24/7.</li>
		  <li><i class="ion-checkmark"> </i>Funcionalidades personalizadas según las necesidades de tu empresa.</li>
		  <li><i class="ion-checkmark"> </i>Integración avanzada con sistemas internos.</li>
		  <li><i class="ion-checkmark"> </i>Consultoría estratégica para optimizar el uso del sistema.</li>
		  <li><i class="ion-checkmark"> </i>Capacitación y formación para el equipo de tu empresa.</li>
		</ul>
		<div class="plan-select"><a href="">Seleciona Plan</a></div>
	  </div>
	</div>
	</div>
</section>
		<!----div class="services-area gray-bg section-padding pad-bot-90">
			 <div class="container">
				 <div class="row">
					 <div class="offset-lg-2 col-lg-8 text-center">
						 <div class="section-title">
							 <h6>Services</h6>
							 <h2>Providing the Best Global <b>Industry Services</b></h2>
						 </div>
					 </div>
				 </div>
	
				 <div class="row mt-30">
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
				 </div>
			 </div>
		 </div> ---->
	</template>
	
	
	<style scoped>
	@import '../../../public/assets/css/responsive.css';
	@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
	@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600);
	
	.snip1404 {
	  font-family: 'Source Sans Pro', Arial, sans-serif;
	  color: rgba(0, 0, 0, 0.7);
	  top: 10px;
	  text-align: left;
	  font-size: 16px;
	  width: 100%;
	  max-height: 742px;
	  max-width: 1000px;
	
	}
	
	.snip1404 .plan {
	  display: inline-block;
	  margin: 0 10px;
	  position: relative;
	  text-align: center;
	  overflow: hidden;
	  border: 3px solid #d7e9f2;
	  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	  background-color: #ffffff;
	  border-radius: 10px;
	  transition: transform 0.3s, box-shadow 0.3s;
	  width: calc(25% - 20px); /* Ajusta el ancho para pantallas grandes */
		top: -150px;
		left: 140px;
	}
	
	.snip1404 .plan:hover {
	  transform: scale(1.05);
	  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
	}
	
	.snip1404 .plan-title {
	  color: #ffffff;
	  background-color: #006fff;
	  position: relative;
	  margin: 0;
	  padding: 20px;
	  text-transform: uppercase;
	  letter-spacing: 1px;
	  font-size: 1.25em;
	}
	
	.snip1404 .plan-title:after {
	  position: absolute;
	  content: '';
	  top: 100%;
	  left: 0;
	  width: 0;
	  height: 0;
	  border-style: solid;
	  border-width: 40px 300px 0 0;
	  border-color: #006fff transparent transparent;
	}
	
	.snip1404 .plan-cost {
	  padding: 20px;
	  text-align: center;
	}
	
	.snip1404 .plan-price {
	  font-weight: 600;
	  font-size: 3em;
	  position: relative;
	  top: 10px;
	}
	
	.snip1404 .plan-type {
	  opacity: 0.9;
	  font-size: 1em;
	  text-transform: uppercase;
	}
	
	.snip1404 .plan-features {
	  padding: 20px;
	  margin: 0;
	  list-style: none;
	}
	
	.snip1404 .plan-features li {
	  padding: 10px 0;
	  border-bottom: 1px solid #e0e0e0;
	  display: flex;
	  align-items: center;
	}
	
	.snip1404 .plan-features i {
	  margin-right: 10px;
	  color: #006fff;
	}
	
	.snip1404 .plan-select {
	  border-top: 1px solid #e0e0e0;
	  padding: 20px;
	  background-color: #f9f9f9;
	}
	
	.snip1404 .plan-select a {
	  background-color: #006fff;
	  color: #ffffff;
	  text-decoration: none;
	  padding: 10px 20px;
	  font-size: 0.875em;
	  font-weight: 600;
	  border-radius: 20px;
	  text-transform: uppercase;
	  display: inline-block;
	  transition: background-color 0.3s;
	}
	
	.snip1404 .plan-select a:hover {
	  background-color: #0056b3;
	}
	
	.h3-planes {
	  text-align: center;
	  padding: 50px 20px;
	  color: #006fff;
	  font-size: 2.5em;
	  margin: 0;
	  left: 100px;
	  top: -170px;
	}
	@media only screen and (min-width: 768px) and (max-width: 991px) {
		.snip1404 {
	  font-family: 'Source Sans Pro', Arial, sans-serif;
	  color: rgba(0, 0, 0, 0.7);
	  top: 10px;
	  text-align: left;
	  font-size: 16px;
	  width: 100%;
	  max-height: 1215px;
	  max-width: 1000px;
	
	}
	
	.snip1404 .plan {
	  display: inline-block;
	  margin: 27px 10px;
	  position: relative;
	  text-align: center;
	  overflow: hidden;
	  border: 3px solid #d7e9f2;
	  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	  background-color: #ffffff;
	  border-radius: 10px;
	  transition: transform 0.3s, box-shadow 0.3s;
	  width: calc(49% - 20px); /* Ajusta el ancho para pantallas grandes */
		top: -150px;
		left: 162px;
	}
	
	.snip1404 .plan:hover {
	  transform: scale(1.05);
	  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
	}
	
	.snip1404 .plan-title {
	  color: #ffffff;
	  background-color: #006fff;
	  position: relative;
	  margin: 0;
	  padding: 20px;
	  text-transform: uppercase;
	  letter-spacing: 1px;
	  font-size: 1.25em;
	}
	
	.snip1404 .plan-title:after {
	  position: absolute;
	  content: '';
	  top: 100%;
	  left: 0;
	  width: 0;
	  height: 0;
	  border-style: solid;
	  border-width: 40px 300px 0 0;
	  border-color: #006fff transparent transparent;
	}
	
	.snip1404 .plan-cost {
	  padding: 20px;
	  text-align: center;
	}
	
	.snip1404 .plan-price {
	  font-weight: 600;
	  font-size: 3em;
	  position: relative;
	  top: 10px;
	}
	
	.snip1404 .plan-type {
	  opacity: 0.9;
	  font-size: 1em;
	  text-transform: uppercase;
	}
	
	.snip1404 .plan-features {
	  padding: 20px;
	  margin: 0;
	  list-style: none;
	}
	
	.snip1404 .plan-features li {
	  padding: 10px 0;
	  border-bottom: 1px solid #e0e0e0;
	  display: flex;
	  align-items: center;
	}
	
	.snip1404 .plan-features i {
	  margin-right: 10px;
	  color: #006fff;
	}
	
	.snip1404 .plan-select {
	  border-top: 1px solid #e0e0e0;
	  padding: 20px;
	  background-color: #f9f9f9;
	}
	
	.snip1404 .plan-select a {
	  background-color: #006fff;
	  color: #ffffff;
	  text-decoration: none;
	  padding: 10px 20px;
	  font-size: 0.875em;
	  font-weight: 600;
	  border-radius: 20px;
	  text-transform: uppercase;
	  display: inline-block;
	  transition: background-color 0.3s;
	}
	
	.snip1404 .plan-select a:hover {
	  background-color: #0056b3;
	}
	
	.h3-planes {
	  text-align: center;
	  padding: 50px 20px;
	  color: #006fff;
	  font-size: 2.5em;
	  margin: 0;
	  left: 184px;
	  top: -170px;
	}
	}


	/* Mobile Layout: 320px. 
=====================================================================
=====================================================================
*/

@media only screen and (max-width: 767px) {

	.snip1404 {
	  font-family: 'Source Sans Pro', Arial, sans-serif;
	  color: rgba(0, 0, 0, 0.7);
	  top: 10px;
	  text-align: left;
	  font-size: 16px;
	  width: 100%;
	  max-height: 2332px;
	  max-width: 1000px;
	
	}
	
	.snip1404 .plan {
	  display: inline-block;
	  margin: 27px 10px;
	  position: relative;
	  text-align: center;
	  overflow: hidden;
	  border: 3px solid #d7e9f2;
	  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	  background-color: #ffffff;
	  border-radius: 10px;
	  transition: transform 0.3s, box-shadow 0.3s;
	  width: calc(104% - 20px); /* Ajusta el ancho para pantallas grandes */
		top: -150px;
		left: 162px;
	}
	
	.snip1404 .plan:hover {
	  transform: scale(1.05);
	  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
	}
	
	.snip1404 .plan-title {
	  color: #ffffff;
	  background-color: #006fff;
	  position: relative;
	  margin: 0;
	  padding: 20px;
	  text-transform: uppercase;
	  letter-spacing: 1px;
	  font-size: 1.25em;
	}
	
	.snip1404 .plan-title:after {
	  position: absolute;
	  content: '';
	  top: 100%;
	  left: 0;
	  width: 0;
	  height: 0;
	  border-style: solid;
	  border-width: 40px 300px 0 0;
	  border-color: #006fff transparent transparent;
	}
	
	.snip1404 .plan-cost {
	  padding: 20px;
	  text-align: center;
	}
	
	.snip1404 .plan-price {
	  font-weight: 600;
	  font-size: 3em;
	  position: relative;
	  top: 10px;
	}
	
	.snip1404 .plan-type {
	  opacity: 0.9;
	  font-size: 1em;
	  text-transform: uppercase;
	}
	
	.snip1404 .plan-features {
	  padding: 20px;
	  margin: 0;
	  list-style: none;
	}
	
	.snip1404 .plan-features li {
	  padding: 10px 0;
	  border-bottom: 1px solid #e0e0e0;
	  display: flex;
	  align-items: center;
	}
	
	.snip1404 .plan-features i {
	  margin-right: 10px;
	  color: #006fff;
	}
	
	.snip1404 .plan-select {
	  border-top: 1px solid #e0e0e0;
	  padding: 20px;
	  background-color: #f9f9f9;
	}
	
	.snip1404 .plan-select a {
	  background-color: #006fff;
	  color: #ffffff;
	  text-decoration: none;
	  padding: 10px 20px;
	  font-size: 0.875em;
	  font-weight: 600;
	  border-radius: 20px;
	  text-transform: uppercase;
	  display: inline-block;
	  transition: background-color 0.3s;
	}
	
	.snip1404 .plan-select a:hover {
	  background-color: #0056b3;
	}
	
	.h3-planes {
	  text-align: center;
	  padding: 50px 20px;
	  color: #006fff;
	  font-size: 1.5em;
	  margin: 0;
	  left: 169px;
	  top: -170px;
	}
}
	
	</style>