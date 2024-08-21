<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    document.querySelectorAll('.accordion-button').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;

            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
</script>

<template>
  <section id="contact">
    <div class="jeffer-fqe">
        <div class="container">
          <div>
          <h1>FQAS</h1>
          <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>  labore iusto quisquam a, veniam odio laboriosam </p>
          <img class="robot" src="/assets/resourcomp/bot.png" alt=""> 
          </div>
           
            <div class="accordion">
                <div class="accordion-item">
                    <button class="accordion-button">
                      <span class="accordion-text">¿Cómo puedo registrar mi empresa en Smart Sales?</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="cordion-icon2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                    <div class="accordion-content">
                        <p>Para registrar tu empresa, simplemente completa el formulario de inscripción con los datos de tu negocio, incluyendo nombre, dirección y tipo de negocio. También puedes conectar tu base de datos de productos directamente al sistema.</p>
                    </div>
                </div>
              
                 
                <div class="accordion-item">
                  
                    <button class="accordion-button">
                      ¿Cómo se integra el chatbot con WhatsApp?
                        <svg xmlns="http://www.w3.org/2000/svg" class="cordion-icon3" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                    <div class="accordion-content">
                        <p>Nuestro sistema utiliza las librerías de OpenAI y WhatsApp para integrar el chatbot de GPT-4, permitiendo que tus clientes interactúen de manera natural y fluida a través de WhatsApp.</p>
                    </div>
                </div>   
                <div class="accordion-item">
                    <button class="accordion-button">
                      ¿Es seguro almacenar las conversaciones y datos de contacto?
                      <svg xmlns="http://www.w3.org/2000/svg" class="cordion-icon4" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                    <div class="accordion-content">
                        <!-- Contenido modificado para estar en la misma línea -->
                        <p>En Smart Sales priorizamos la seguridad y privacidad de los datos, utilizando encriptación y cumpliendo con todas las regulaciones de protección de datos aplicables.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-button">
                      ¿Puedo gestionar productos de diferentes tipos de negocios con Smart Sales?
                        <svg xmlns="http://www.w3.org/2000/svg" class="cordion-icon5" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                    <div class="accordion-content">
                        <p>Absolutamente. Smart Sales es flexible y adaptable, permitiéndote gestionar productos y servicios de diversos tipos de negocios de manera eficiente.</p>
                    </div>
                  </div>
                <div class="accordion-item">
                    <button class="accordion-button">
                      ¿Cómo se realiza el seguimiento de los pagos y el estatus de las órdenes?
                        <svg xmlns="http://www.w3.org/2000/svg" class="cordion-icon6" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                    <div class="accordion-content">
                        <p>Nuestro sistema actualiza automáticamente el estatus de las órdenes tras la confirmación del pago y envía notificaciones a tus clientes sobre el progreso de su orden. Además, proporciona un enlace para que los clientes consulten el estatus de su orden en cualquier momento.</p>
                    </div>
                </div>
                </div>
        </div>    
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.robot {
  position: relative;
  top: 2px;
  width: 40%;
}
.lorem{
  color: #e0e0e0;
  position: relative;
  top: 22px;
}
h1{
  color: #e0e0e0;
}
.accordion {
  position: relative;
  left: 500px;
  top: -600px;
  width: 60%;
    margin: 0;
    padding: 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.accordion-item {
    margin-bottom: 20px; /* Ajusta el espacio entre cada elemento del acordeón */
    padding: 0;
    border-bottom: 1px solid #e0e0e0;
}
.accordion-button {
    width: 100%;
    background-color: #ffff;
    color: #313131;
    font-weight: 700;
    border: none;
    padding: 25px;
    text-align: left;
    cursor: pointer;
    font-size: 18px;
    left: -9px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.3s ease;
}


.accordion-icon {
    width: 34px; /* Tamaño del ícono ajustado */
    height: 84px; /* Tamaño del ícono ajustado */
    fill: #0070ff; /* Color del ícono ajustado */
    transition: transform 0.3s ease;
    margin-left: auto; /* Alinea el ícono a la derecha */
}

.cordion-icon2 {
  position: relative;
  left: 100px;
  width: 24px; /* Tamaño del ícono ajustado */
    height: 24px; /* Tamaño del ícono ajustado */
    fill: #0070ff; /* Color del ícono ajustado */
    transition: transform 0.3s ease;
    margin-left: auto; /* Alinea el ícono a la derecha */
}
.cordion-icon3 {
  position: relative;
  left: 132px;
  width: 24px; /* Tamaño del ícono ajustado */
    height: 24px; /* Tamaño del ícono ajustado */
    fill: #0070ff; /* Color del ícono ajustado */
    transition: transform 0.3s ease;
    margin-left: auto; /* Alinea el ícono a la derecha */
}
.cordion-icon4 {
  position: relative;
  left: 48px;
  width: 24px; /* Tamaño del ícono ajustado */
    height: 24px; /* Tamaño del ícono ajustado */
    fill: #0070ff; /* Color del ícono ajustado */
    transition: transform 0.3s ease;
    margin-left: auto; /* Alinea el ícono a la derecha */
}
.cordion-icon5 {
  position: relative;
  left: 23px;
  width: 24px; /* Tamaño del ícono ajustado */
    height: 24px; /* Tamaño del ícono ajustado */
    fill: #0070ff; /* Color del ícono ajustado */
    transition: transform 0.3s ease;
    margin-left: auto; /* Alinea el ícono a la derecha */
}
.cordion-icon6 {
  position: relative;
  left:24px;
  width: 24px; /* Tamaño del ícono ajustado */
    height: 24px; /* Tamaño del ícono ajustado */
    fill: #0070ff; /* Color del ícono ajustado */
    transition: transform 0.3s ease;
    margin-left: auto; /* Alinea el ícono a la derecha */
}
.accordion-button.active .accordion-icon {
    transform: rotate(180deg);
}

.accordion-content {
    display: none;
    background-color: white;
    padding: 20px;
    border: 1px solid #007bff;
    border-top: none;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    border-radius: 8px;
}




@media (max-width: 768px) {
  .jeffer-fqe{
    height: 1300px;
  }
  h1{
 text-align: center;
}
.lorem{
text-align: center;
}
.accordion {
  position: relative;
  left: 30px;
  top: -100px;
  width: 90%;
    
}
.accordion-icon {
    width: 74px; /* Tamaño del ícono ajustado */
position: relative;
left: 90px;
}
.cordion-icon6 {
  position: relative;
  left:24px;
  width: 44px; /* Tamaño del ícono ajustado */
    height: 24px; /* Tamaño del ícono ajustado */
    fill: #0070ff; /* Color del ícono ajustado */
    transition: transform 0.3s ease;
    margin-left: auto; /* Alinea el ícono a la derecha */
}
.cordion-icon5 {
  position: relative;
  left: 23px;
  width: 44px; /* Tamaño del ícono ajustado */
    height: 24px; /* Tamaño del ícono ajustado */
    fill: #0070ff; /* Color del ícono ajustado */
    transition: transform 0.3s ease;
    margin-left: auto; /* Alinea el ícono a la derecha */
}
.cordion-icon4 {
  position: relative;
  left: 23px;
  width: 44px; /* Tamaño del ícono ajustado */
    height: 24px; /* Tamaño del ícono ajustado */
    fill: #0070ff; /* Color del ícono ajustado */
    transition: transform 0.3s ease;
    margin-left: auto; /* Alinea el ícono a la derecha */
}
.cordion-icon3 {
  position: relative;
  left: 23px;
  width: 44px; /* Tamaño del ícono ajustado */
    height: 24px; /* Tamaño del ícono ajustado */
    fill: #0070ff; /* Color del ícono ajustado */
    transition: transform 0.3s ease;
    margin-left: auto; /* Alinea el ícono a la derecha */
}
.accordion-icon {
  position: relative;
  left: 23px;
  width: 44px; /* Tamaño del ícono ajustado */
    height: 24px; /* Tamaño del ícono ajustado */
    fill: #0070ff; /* Color del ícono ajustado */
    transition: transform 0.3s ease;
    margin-left: auto; /* Alinea el ícono a la derecha */
}
.robot {
  position: relative;
  top: 804px;
  left: 57px;
  width: 71%;
}
}
</style>