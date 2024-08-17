<script setup>

import { onMounted, onUpdated, ref } from "vue";
import axios from "axios";

const testimonials = ref([]);

onMounted(async () => {
  const { data: fetchedTestimonials } = await axios.get("/data/testimonials.json");
  testimonials.value = fetchedTestimonials.testimonials;
});

onUpdated(() => {     

    $('.testimonial-carousel').owlCarousel({
		items: 1,
		margin: 30,
		dots: true,
		nav: false,
		loop: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			575: {
				items: 1,
				nav: false,
				dots: false,
			},

			767: {
				items: 2,
				nav: false
			},

			990: {
				items: 2,
				loop: true,

			},
			1200: {
				items: 3,
				dots: true,
				loop: true,
			}
		}
	});

  
});

</script>


<template>
	<div class="jeffer-fqe">
    <div class="container">

    <h1 class="texto-h3">FQAS</h1>
	<p class="clase">Optimiza la comunicación con tus clientes mediante nuestro <br>chatbot inteligente, integrado con WhatsApp y potenciado por <br> GPT-4. Responde automáticamente a consultas frecuentes,<br> muestra catálogos y ayuda a tus clientes a realizar pedidos<br> o reservas  de citas sin complicaciones.</p>
    <!---h1 class="h1-preguntas">FQA</h1> --->
    <img class="imagen-rob" src="/assets/resourcomp/bot.png" alt="">
    <body>
    <section class="preguntas-frecuentes clearfix">	
		<div class="preguntas-frecuentes-contenedor serif">
			
			<div class="preguntas-frecuentes-encabezado-linea-roja"></div>
      
      <div class="accordion css-accordion preguntas">
        <div>
        <input class="accordion-item-input" type="checkbox" name="accordion" id="item1" /><label for="item1" class="accordion-item-hd">¿Cómo puedo registrar mi empresa en Smart Sales?<span class="accordion-item-hd-cta">&#9650;</span></label>
        <div class="accordion-item-bd respuesta"><p><span class="punto"></span>	Para registrar tu empresa, simplemente completa el formulario de inscripción con los datos de tu negocio, incluyendo nombre, dirección y tipo de negocio. También puedes conectar tu base de datos de productos directamente al sistema.</p></div>
      </div>

      <div>
        <input class="accordion-item-input" type="checkbox" name="accordion" id="item2" /><label for="item2" class="accordion-item-hd">¿Cómo se integra el chatbot con WhatsApp?<span class="accordion-item-hd-cta">&#9650;</span></label>
        <div class="accordion-item-bd respuesta"><p><span class="punto"></span>Nuestro sistema utiliza las librerías de OpenAI y WhatsApp para integrar el chatbot de GPT-4, permitiendo que tus clientes interactúen de manera natural y fluida a través de WhatsApp.</p></div>
      </div>

      <div>
        <input class="accordion-item-input" type="checkbox" name="accordion" id="item3" />
        <label for="item3" class="accordion-item-hd">¿Es seguro almacenar las conversaciones y datos de contacto?<span class="accordion-item-hd-cta">&#9650;</span></label>
        <div class="accordion-item-bd respuesta"><p><span class="punto"></span>Sí, en Smart Sales priorizamos la seguridad y privacidad de los datos. Utilizamos encriptación y cumplimos con todas las regulaciones de protección de datos aplicables.</p></div>
      </div>

      <div>
        <input class="accordion-item-input" type="checkbox" name="accordion" id="item4" /><label for="item4" class="accordion-item-hd">¿Puedo gestionar productos de diferentes tipos de negocios con Smart Sales?<span class="accordion-item-hd-cta">&#9650;</span></label>
        <div class="accordion-item-bd respuesta"><p><span class="punto"></span>Absolutamente. Smart Sales es flexible y adaptable, permitiéndote gestionar productos y servicios de diversos tipos de negocios de manera eficiente.</p></div>
      </div>
      <div>
        <input class="accordion-item-input" type="checkbox" name="accordion" id="item5" /><label for="item5" class="accordion-item-hd">¿Cómo se realiza el seguimiento de los pagos y el estatus de las órdenes?<span class="accordion-item-hd-cta">&#9650;</span></label>
        <div class="accordion-item-bd respuesta"><p><span class="punto"></span>Nuestro sistema actualiza automáticamente el estatus de las órdenes tras la confirmación del pago y envía notificaciones a tus clientes sobre el progreso de su orden. Además, proporciona un enlace para que los clientes consulten el estatus de su orden en cualquier momento.  </p></div>
      </div>  
    </div>    
  </div>
</section>
</body>
</div>    
	</div>
</template>

<style scoped>
.clase{
	left: 50px;
	top: 130px;
	color: #ffff;
	background-color: #0070ff;
}
body {
  margin: 0;
  color: #000;

}

.accordion-item-input:checked ~ .accordion-item-bd {
  padding-top: 15px;
  margin-bottom: 15px;
  max-height: 570px;
  
  
}
.punto {
	width: 10px;
	height: 10px;
	background-color: #000;
	border-radius: 50%;
	margin-right: 10px;
}
.imagen-rob{
  position: relative;
  left: 40px;
  top: 90px;
  width: 39%;
}

.accordion-item-input:checked ~ .accordion-item-hd > .accordion-item-hd-cta {
  transform: rotate(0);
}

.accordion-item-hd-cta {
  display: block;
  width: 40px; /* increased width to make the arrow larger */
  position: absolute;
  top: calc(50% - 10px); /* adjusted top position to center the arrow */
  right: 0;
  pointer-events: none;
  transition: transform .3s ease;
  transform: rotate(-180deg);
  text-align: center;
  font-size: 24px; /* increased font size to make the arrow larger */
  line-height: 1;
  color: #007bff; /* changed color to blue */
}

.accordion-item-bd {
  max-height: 0;

  margin-bottom: 0;
  overflow: hidden;
  transition: max-height .15s ease-out, margin-bottom .3s ease-out, padding .3s ease-out;
}

.accordion-item-input {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1;
  overflow: hidden;
  position: absolute;
  left: -9999px;
}

/* */

.preguntas-frecuentes {
  
	position: relative;
	width: 100%;
	z-index: 89;
	}

.preguntas-frecuentes-contenedor {
  margin: 0 auto;
	padding: 4rem 1.25rem 6rem;
	position: relative;
  top: -680px;
  left: 270px;
	width: 50%;
	max-width: 106.25rem;
}

.preguntas-frecuentes-encabezado-linea-roja {
  border-bottom: 2px #4fc1de solid;
	margin: 15px auto 21px;
	width: 40px;
}

.preguntas-frecuentes h1 {
  text-align: center;
}

.preguntas {
  padding-top: 3.21rem;
}

.preguntas label {
  background: #fff;
  color: #000;
	border-bottom: 1px solid #eee;
	border-radius: 8px;
  cursor: pointer;
  display: block;
	font-size: 1.1875rem;
	letter-spacing: -.0225rem;
	line-height: 1.36842;
	margin-bottom: 16px;
	padding: 20px 10px;
  position: relative;
	transition: all 0.35s ease;
}

.preguntas label:hover {
  background: #e0eaef;
	color: #000;
	cursor: pointer;
}

.preguntas label::before {
  content: "\276f";
	font-size: 18px;
	float: left;
	line-height: 30px;
	margin: 0 15px 0 5px;
	transition: all 0.15s ease;
	color: #4fc1de;
}

.preguntas label:hover::before {
  color: #fff;
  opacity: 0.55;
  transform: rotate(90deg);
}

.preguntas-cerrar {
  cursor: pointer;
}

.preguntas label.cerrar::after {
  content: "\2715";
	float: right;
	font-size: 11px;
	font-weight: 300;
	line-height: 30px;
}

.preguntas label.cerrar::before {
  transform: rotate(-90deg);
}

.respuesta {
  background: #fff;
  line-height: 1.8em;
  margin-bottom: 25px;
  margin-top: -17px;
  border-top: 1px dashed #eee;
  border-radius: 11px
}

.respuesta p {
  margin: 0;
  padding: 25px 25px;
}

.respuesta-enlace-dotted {
  border-bottom: 1px dotted red;
}
.h1-preguntas{
  left: 70px;
  color: #ffff;
}

.texto-h3 {
  top: 80px;
  left: -500px;
  background-color: #0070ff;
  text-align: center;
  font-size: 50px;
  color: #ffff;
  font-weight: 700;
}

@media (min-width: 400px) {
  .texto-h3 {
    font-size: 60px;
	font-weight: 700;
  }
}
	
@media (min-width: 768px) {
  .preguntas {
    padding-top: 5.21rem;
  }
  .preguntas label {
    font-size: 1.3125rem;
    letter-spacing: -.01875rem;
    line-height: 1.33333;
    padding: 20px;
  }
  .respuesta p {
    font-size: 1.21rem;
    letter-spacing: 0.021rem;
    line-height: 2.1;
    padding: 25px 50px;
  }
  .texto-h3 {
    font-size: 50px
  }
}

@media (min-width: 1000px) {
  .texto-h3 {
    font-size: 50px
  }
}











@media (max-width: 767px) {
  body {
  margin: 0;
}

.accordion-item-input:checked ~ .accordion-item-bd {
  max-height: 1000px;
  padding-top: 15px;
  margin-bottom: 15px;
  
}
.imagen-rob{
  position: relative;
  left: 120px;
  top: 900px;
  width: 40%;
  z-index: -1; /* Asegura que la imagen esté detrás de otros elementos */
}
.clase{
	text-align: center;
	left: -10px;
	top: 130px;
}
.accordion-item-input:checked ~ .accordion-item-hd > .accordion-item-hd-cta {
  transform: rotate(0);
}

.accordion-item-hd-cta {
  display: block;
  width: 40px; /* increased width to make the arrow larger */
  position: absolute;
  top: calc(50% - 10px); /* adjusted top position to center the arrow */
  right: 0;
  pointer-events: none;
  transition: transform .3s ease;
  transform: rotate(-180deg);
  text-align: center;
  font-size: 24px; /* increased font size to make the arrow larger */
  line-height: 1;
  color: #007bff; /* changed color to blue */
}

.accordion-item-bd {
  max-height: 0;
  margin-bottom: 0;
  overflow: hidden;
  transition: max-height .15s ease-out, margin-bottom .3s ease-out, padding .3s ease-out;
}

.accordion-item-input {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1;
  overflow: hidden;
  position: absolute;
  left: -9999px;
}

/* */

.preguntas-frecuentes {
  
	position: relative;
	width: 100%;
	z-index: 89;
	}

.preguntas-frecuentes-contenedor {
  margin: 0 auto;
	padding: 4rem 1.25rem 6rem;
	position: relative;
  top: -100px;
  left: 10px;
	overflow: hidden;
	width: 90%;
	max-width: 106.25rem;
}

.preguntas-frecuentes-encabezado-linea-roja {
  border-bottom: 2px #4fc1de solid;
	margin: 15px auto 21px;
	width: 40px;
}

.preguntas-frecuentes h1 {
  text-align: center;
}

.preguntas {
  padding-top: 3.21rem;
}

.preguntas label {
  background: #fff;
  color: #000;
	border-bottom: 1px solid #eee;
	border-radius: 8px;
  cursor: pointer;
  display: block;
	font-size: 1.1875rem;
	letter-spacing: -.0225rem;
	line-height: 1.36842;
	margin-bottom: 16px;
	padding: 20px 10px;
  position: relative;
	transition: all 0.35s ease;
}

.preguntas label:hover {
  background: #e0eaef;
	color: #000;
	cursor: pointer;
}

.preguntas label::before {
  content: "\276f";
	font-size: 18px;
	float: left;
	line-height: 30px;
	margin: 0 15px 0 5px;
	transition: all 0.15s ease;
	color: #4fc1de;
}

.preguntas label:hover::before {
  color: #fff;
  opacity: 0.55;
  transform: rotate(90deg);
}

.preguntas-cerrar {
  cursor: pointer;
}

.preguntas label.cerrar::after {
  content: "\2715";
	float: right;
	font-size: 11px;
	font-weight: 300;
	line-height: 30px;
}

.preguntas label.cerrar::before {
  transform: rotate(-90deg);
}

.respuesta {
  background: #fff;
  line-height: 1.8em;
  margin-bottom: 25px;
  margin-top: -17px;
  border-top: 1px dashed #eee;
  border-radius: 11px
}

.respuesta p {
  margin: 0;
  padding: 25px 25px;
}

.respuesta-enlace-dotted {
  border-bottom: 1px dotted red;
}
.h1-preguntas{
  left: 70px;
  color: #ffff;
}



@media (min-width: 400px) {
  .texto-h3 {
    font-size:40px;
  }
}
	
@media (min-width: 768px) {
  .preguntas {
    padding-top: 5.21rem;
  }
  .preguntas label {
    font-size: 1.3125rem;
    letter-spacing: -.01875rem;
    line-height: 1.33333;
    padding: 20px;
  }
  .respuesta p {
    font-size: 1.21rem;
    letter-spacing: 0.021rem;
    line-height: 2.1;
    padding: 25px 50px;
  }
 
}

@media (min-width: 1000px) {
 
}
}
</style>