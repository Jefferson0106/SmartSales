<script setup>

import { onMounted, ref} from 'vue'

import axios from "axios";

const features = ref([]);

onMounted(async () => {
  const { data: fetchedFeatures } = await axios.get("/data/features.json");
  features.value = fetchedFeatures.features;
});


</script>

<template>
		<div class="telefono-mano">
		<div class="about-area section-padding">
 		<div class="container">
			<!---h1>¿Qué puedes hacer con Smart Sales?</h1> --->
 			<div class="row align-items-center">
 				<div class="col-lg-6 col-md-12 col-sm-12">
					<div class="about-img-wrap">
                    <div class="image-one wow fadeInUp" data-wow-delay=".2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                        <img class="imagen-telefono" src="/assets/resourcomp/bank-card-mobile-phone-online-payment.jpg" alt="">
                    </div>                        
                    <div class="image-two wow fadeInUp" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp;">
                        <!---img class="imagen-whatsapp" src="/assets/resourcomp/whatsapp.png" alt=""> --->
                    </div>                                            
                </div> 					
 				</div>
 				<div class="col-lg-6 col-md-12 col-sm-12">
 					<div class="info-content-area">
 						<div class="section-title">
 							<!---h6>About Us</h6> --->
 							<h2 class="h2-titulo-smarmar-punto"><span class="punto"></span>Automatización de gestión de órdenes y pagos<b></b></h2>
 						</div>
 						<p>Simplifica el proceso de pedidos y pagos con nuestra herramienta automatizada. Desde la confirmación del pedido hasta la actualización del estatus de la orden y el seguimiento de pagos, Smart Sales asegura un flujo de trabajo eficiente y transparente.</p>
 						<!-----div class="about-list-item mt-30">
							<p class="highlight">Since our launch in 1995, to deliver high value project.</p>
							<p class="highlight">We always provide flexible & quality task. </p>
							<p class="highlight">Uninque latest machinary used the industrial project.</p>
						</div> --->

 						<!---div class="row founded">
 							<div class="col-lg-4 col-md-6 col-12">
 								<div class="years"><span>25</span>Year of Success</div>
 							</div>
 							<div class="col-lg-8 col-md-6 col-12">
 								<div class="text">Since we established in 1995 experience &amp; still a growing protfolio day by day!</div>
 							</div>
 						</div> -->
 					</div> 
 				</div>

 			</div>
 		</div>
 	</div>
	</div>
</template>
<style scoped>
@import '../../../public/assets/css/responsive.css';
@media only screen and (min-width: 768px) and (max-width: 991px) {
.telefono-mano .h2-titulo-smarmar-punto{
	text-align: center;
 left: -10px;
font-size: 26px;
top: -520px;
}
.telefono-mano .imagen-telefono{
width: 63%;
position: relative;
top: -3;
left: 134px;
z-index: 1;
}

}
</style>