<script setup>

import { onMounted } from 'vue'

onMounted(() => {     
    
	$(".navbar-toggler").on("click", function () {
		$(this).toggleClass("active");
	});

	$(".navbar-nav li a").on("click", function () {
		$(".sub-nav-toggler").removeClass("active");
	});

	var subMenu = $(".navbar-nav .sub-menu");

	if (subMenu.length) {
		subMenu
			.parent("li")
			.children("a")
			.append(function () {
				return '<button class="sub-nav-toggler"> <i class="fa fa-angle-down"></i> </button>';
			});

		var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

		subMenuToggler.on("click", function () {
			$(this).parent().parent().children(".sub-menu").slideToggle();
			return false;
		});
	}

	$('.sticky-area').sticky({
		topSpacing: 0,
	});
  
});

</script>

<template>
	<header id="header-3" class="header-area absolate-header">
	  <div class="sticky-area">
		<div class="navigation">
		  <div class="container">
			<div class="row align-items-center">
			  <div class="col-lg-3">
				<div class="logo"> 								
				  <router-link class="navbar-brand" to="/"><img src="/assets/resourcomp/logo-black.png" alt=""></router-link>
				</div>
			  </div>
			  <div class="col-lg-6">
				<div class="main-menu">
				  <nav class="navbar navbar-expand-lg">
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					  <span class="navbar-toggler-icon"></span>
					  <span class="navbar-toggler-icon"></span>
					  <span class="navbar-toggler-icon"></span>
					</button>
  
					<div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
					  <ul class="navbar-nav m-auto">
						<li class="nav-item">
						  <a class="nav-link" href="#hero">Home
							<span class="sub-nav-toggler"></span>
						  </a>
						</li>




  
						<li class="nav-item">
						  <a class="nav-link" href="#about">Conocenos
							<span class="sub-nav-toggler"></span>
						  </a>
						</li>
  
						<li class="nav-item">
						  <a class="nav-link" href="#servicio">Contáctanos
							<span class="sub-nav-toggler"></span>
						  </a>
						</li>
  
						<li class="nav-item">
						  <a class="nav-link" href="#counterOne">Planes 
							<span class="sub-nav-toggler"></span>
						  </a>
						</li>
  
						<li class="nav-item">
						  <a class="nav-link" href="#contact">FQAS 
							<span class="sub-nav-toggler"></span>
						  </a>
						</li>
					  </ul>
					</div>
				  </nav>
				</div>
			  </div>	
			</div>
			<div class="col-lg-3 text-end">
 							<div class="header-right-content">
 								<router-link :to="{name:'contact'}" class="header-btn main-btn">inicia seccion</router-link>
							
 							</div>
 						</div> 
					
		  </div>
		</div>
	  </div>
	</header>
  </template>
  
  <style scoped>
.main-btn {
	display: inline-block;
	position: relative;
	left: 843px;
	top: -70px;
	background: #0070ff;
	color: #fff;
	font-size: 16px;
	font-weight: 500;
	
	text-transform: capitalize;
	padding: 10px 30px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	-webkit-transition: .3s;
	transition: .3s;
}
@media (max-width: 768px) {
	.main-btn {
	position: relative;
	width: 50%;
	height: 10%;
	left: 8px;
	top: -18px;
	padding: 1px 40px;
	
	}
	}
  </style>