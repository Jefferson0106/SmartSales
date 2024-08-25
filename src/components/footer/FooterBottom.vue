<template>
    <div class="footer-bottom">
		<div class="container">
    <p class="copyright-line">© Smart Sale Agent 2024.</p>
</div>
 	</div>
</template>

<style scoped>

.container {
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
    height: 100px; /* Ajusta la altura según sea necesario */
}

.copyright-line {
    text-align: center; 
	color: #FFFFFF;/* Asegura que el texto esté centrado */
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

    .container {
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
    height: 100px; /* Ajusta la altura según sea necesario */
}

.copyright-line {
    text-align: center; 
	color: #FFFFFF;/* Asegura que el texto esté centrado */
}
.footer-bottom::before {
    content: "";
    display: block;
    width: 551px;
    height: 3px;
    background: #FFFFFF;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}
}
</style>