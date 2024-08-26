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
				  <router-link class="navbar-brand" to="/"><img src="/assets/resourcomp/Logo-SSA.png" alt=""></router-link>
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
						  <a class="nav-link" href="#hero">Inicio
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
								<!---button class="buton-login-inicio">Login</button> --->
								<button class="buton-login">iniciar sesión</button>
 								<!----router-link :to="{name:'contact'}" class="header-btn main-btn">inicia seccion</router-link> --->
							
 							</div>
 						</div> 
					
		  </div>
		</div>
	  </div>
	</header>
  </template>
  
  <style>
@import '../../../public/assets/css/responsive.css';
  </style>