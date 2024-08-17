<template>
    <footer class="footer-area">
 		<div class="container">
 			<div class="footer-up">
 				<div class="row gy-5">
 					<div class="col-lg-3 col-md-6 col-sm-12">
 						<div class="logo">
 							<img src="/assets/resourcomp/logo-white.png" alt="dustrian-logo">
 						</div>
 						
 						
 					</div>
 					<div class="col-lg-2 offset-lg-1 col-md-6 com-sm-12">
 						<h5>Dolorsit</h5>
 						<ul>
 							<li>
 								<router-link :to="{name:'about'}">Home</router-link>
 								<router-link :to="{name:'project'}">conocenos</router-link>
 								<router-link to="/">Contactanos</router-link>
 								<router-link :to="{name:'price'}">Planes</router-link>
 								<router-link :to="{name:'faq'}">FAQ</router-link>
 							</li>
 						</ul>
 					</div>
 					<div class="col-lg-3 col-md-6 col-sm-12">
 						<h5>Legal</h5>
						 <ul>
        <li><a href="#modal1">Aviso de Privacidad</a></li>
		<li><a href="#modal2">Términos y Condiciones</a></li>
        <!---li><a href="#modal2">ROTAR</a></li>
        <li><a href="#modal3">REDIMENSIONAR</a></li> --->
    </ul>

    <!-- Modales -->
    <div id="modal1" class="modalmask">
        <div class="modalbox movedown">
            <a href="#close" title="Close" class="close">X</a>
            <p>En Smart Sales, respetamos tu privacidad y estamos comprometidos a proteger los datos personales que recopilamos de nuestros usuarios y clientes.  Este aviso de privacidad describe cómo recogemos, utilizamos y protegemos tu información. </p>
			<h2>1. Información que Recopilamos</h2>
			<p>Recopilamos la siguiente información cuando utilizas nuestros servicios:</p>
			<p>•	Datos de registro de empresas: nombre de la empresa, dirección, tipo de negocio, y contexto de negocio.</p>
			<p>•	Información de productos y servicios: detalles y descripciones de los productos y servicios que ofreces.</p>
			<p>•	Conversaciones y datos de contacto: historial de conversaciones con los clientes y datos de contacto básicos.</p>
			<p>•	Detalles de órdenes y citas: información sobre pedidos y citas, incluyendo número de orden, productos, cantidades, montos, etc.</p>
			<p>•	Información de pago: detalles de pagos y confirmaciones de transacciones.</p>
			<h2>2. Uso de la Información</h2>
			<p>Utilizamos la información recopilada para los siguientes propósitos:</p>
			<p>•	Proveer y mejorar nuestros servicios.</p>
			<p>•	Facilitar la gestión de productos y servicios de tu empresa.</p>
			<p>•	Automatizar la interacción con los clientes mediante nuestro chatbot integrado con GPT-4 y WhatsApp.</p>
			<p>•	Procesar y gestionar órdenes y citas.</p>
			<p>•	Realizar el seguimiento de pagos y actualizar el estatus de las órdenes.</p>
			<p>•	Cumplir con las obligaciones legales y normativas aplicables.</p>
			<h2>3. Protección de la Información</h2>
			<p>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra el acceso no autorizado, pérdida, alteración o destrucción. Utilizamos encriptación para proteger la información sensible y garantizamos el cumplimiento de las regulaciones de protección de datos aplicables.</p>
			<h2>4. Compartición de Información</h2>
			<p>No compartimos tu información personal con terceros, salvo en los siguientes casos:</p>
			<p>•	Con tu consentimiento expreso.</p>
			<p>•	Para cumplir con obligaciones legales o requerimientos gubernamentales.</p>
			<p>•	Con proveedores de servicios que actúan en nuestro nombre y bajo nuestras instrucciones, asegurando que también cumplan con las regulaciones de protección de datos.</p>
			<h2>5. Derechos del Usuario</h2>
			<p>Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, puedes contactarnos a través de los medios proporcionados en este aviso.</p>
			<h2>6. Cambios en el Aviso de Privacidad</h2>
			<p>Podemos actualizar este aviso de privacidad periódicamente. Te notificaremos sobre cualquier cambio importante a través de nuestros canales de comunicación habituales.</p>
			<h2>7. Contacto</h2>
			<p>Si tienes alguna pregunta o inquietud sobre este aviso de privacidad o sobre cómo manejamos tus datos personales, por favor contáctanos en:</p>
			<p>•	Correo electrónico: soporte@smartsales.com</p>
			<p>•	Teléfono: +123 456 7890</p>
			<p></p>
			<p></p>
			<p></p>
        </div>
    </div>
    <div id="modal2" class="modalmask">
		<div class="modalbox movedown">
            <a href="#close" title="Close" class="close">X</a>
            <h2>1. Aceptación de los Términos</h2>
            <p>Al utilizar el sistema Smart Sales, aceptas cumplir y estar sujeto a los siguientes términos y condiciones. Si no estás de acuerdo con estos términos, no utilices el servicio.</p>
			<h2>2. Definiciones</h2>
			<p>•	"Sistema" se refiere a la plataforma Smart Sales.</p>
            <p>•	"Usuario" se refiere a cualquier persona o entidad que utiliza el Sistema.</p>
			<p>•	"Nosotros" se refiere a la empresa que opera Smart Sales.</p>
			<h2>3. Registro y Acceso</h2>
			<p>Para utilizar el Sistema, debes registrar tu empresa proporcionando información veraz y actualizada. Eres responsable de mantener la confidencialidad de tus credenciales de acceso y de cualquier actividad que ocurra bajo tu cuenta.</p>
			<h2>4. Descripción del Servicio</h2>
			<p>El Sistema ofrece una solución integral para la atención al cliente, gestión de productos y servicios, y automatización de órdenes y pagos. Las principales funcionalidades incluyen:</p>
			<p>•	Registro y gestión de empresas y productos.</p>
			<p>•	Integración con GPT-4 y WhatsApp para automatizar la interacción con los clientes.</p>
			<p>•	Almacenamiento de conversaciones y datos de contacto.</p>
			<p>•	Procesamiento y seguimiento de órdenes y pagos.</p>
			<h2>5. Uso Aceptable</h2>
			<p>El Usuario se compromete a utilizar el Sistema únicamente para los fines legales y de acuerdo con estos Términos. Está prohibido:</p>
			<p>•	Utilizar el Sistema para cualquier propósito ilícito.</p>
			<p>•	Acceder, manipular o usar áreas no públicas del Sistema.</p>
			<p>•	Interferir con el acceso de otros usuarios al Sistema.</p>
			<h2>6. Responsabilidad y Garantías</h2>
			<p>•	Nos esforzamos por mantener el Sistema en funcionamiento de manera continua y sin interrupciones. Sin embargo, no garantizamos la disponibilidad ininterrumpida del Sistema.</p>
			<p>•	No nos hacemos responsables por fallas en los servicios proporcionados por nuestro proveedor de API, OpenAI. En caso de incidencias con el servicio de GPT-4, las órdenes deberán ser atendidas de forma manual por el Usuario.</p>
			<p>•	Nos reservamos el derecho de modificar, suspender o descontinuar cualquier parte del Sistema en cualquier momento y sin previo aviso.</p>
			<h2>7. Limitación de Responsabilidad</h2>
			<p>•	No seremos responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pero no limitándose a, pérdida de ganancias, datos, uso, fondo de comercio, o cualquier otra pérdida intangible.</p>
			<p>•	Nuestra responsabilidad total por cualquier reclamo relacionado con el Sistema se limitará a la cantidad pagada por el Usuario por el uso del Sistema en los 12 meses anteriores al evento que dio lugar a la responsabilidad.</p>
			<h2>8. Privacidad</h2>
			<p>El uso del Sistema también se rige por nuestra Política de Privacidad, la cual describe cómo recopilamos, utilizamos y protegemos la información personal del Usuario.</p>
			<h2>9. Modificaciones de los Términos</h2>
			<p>Podemos actualizar estos Términos de vez en cuando. Notificaremos a los Usuarios sobre cualquier cambio material a través de nuestros canales de comunicación habituales. El uso continuado del Sistema después de la modificación de los Términos constituirá la aceptación de dichos cambios.</p>
			<h2>10. Terminación</h2>
			<p>Nos reservamos el derecho de suspender o terminar el acceso al Sistema en cualquier momento, sin previo aviso, por cualquier motivo, incluyendo, pero no limitándose a, el incumplimiento de estos Términos.</p>
			<h2>11. Ley Aplicable</h2>
			<p>Estos Términos se regirán e interpretarán de acuerdo con las leyes del país en el que operamos, sin dar efecto a ningún principio de conflicto de leyes. Cualquier disputa relacionada con estos Términos se resolverá exclusivamente en los tribunales competentes de dicha jurisdicción.</p>
			<h2>12. Contacto</h2>
			<p>Si tienes alguna pregunta o inquietud sobre estos Términos, por favor contáctanos en:</p>
			<p>•	Correo electrónico: soporte@smartsales.com</p>
			<p>•	Teléfono: +123 456 7890</p>
			<p></p>
			<p></p>
			
        </div>
    </div>
    <div id="modal3" class="modalmask">
        <div class="modalbox resize">
            <a href="#close" title="Close" class="close">X</a>
            <h2>REDIMENSIONAR</h2>
            <p>También puedes redimensionar la ventana hasta hacerla desaparecer.</p>
            <p>Las posibilidades que ofrece CSS3 son múltiples, tan solo hace falta un poco de imaginación para crear efectos realmente llamativos.</p>
        </div>
    </div>
 					</div>
 					<div class="col-lg-3 col-md-6">
						<div class="social-area">
 							<a href=""><i class="lab la-facebook-f"></i></a>
 							<a href=""><i class="lab la-instagram"></i></a>
 							<a href=""><i class="lab la-twitter"></i></a>
 							<a href=""><i class="la la-skype"></i></a>
 						</div>
 					</div>
 				</div>
 			</div>
 		</div>
 	</footer>
</template>

<style scoped>
/* Estilos para el contenedor del modal */
.modalmask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99999;
    opacity: 0;
    transition: opacity 0.3s ease-in;
    pointer-events: none;
}

.modalmask:target {
    opacity: 1;
    pointer-events: auto;
}

.modalbox {
    width: 90%;
    max-width: 800px;
    position: fixed; /* Cambiado a fixed para evitar desplazamiento */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    background: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    max-height: 80vh;
}

/* Estilos para el botón de cerrar */
.close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #333;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
}

.close:hover {
    background: #000;
}

/* Estilos de texto en los modales */
.modalbox h2 {
    color: #333;
    font-size: 1.4em;
    margin-top: 0;
    margin-bottom: 15px;
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
}

.modalbox p {
    color: #333;
    line-height: 1.6;
    margin: 10px 0;
}

/* Estilos adicionales para los elementos del modal */
.modalbox ul {
    padding-left: 20px;
}

.modalbox ul li {
    margin-bottom: 10px;
}
</style>