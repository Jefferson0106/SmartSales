<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: "NuevoQsd",
  data() {
    return {
      form: {
        id: "",
        nombre: "",
        correo: "",
        telefono: "",
        nombreEmpresa: "",
        mensaje: "",
        Token: "",
      },
      isModalVisible: false,
      isThankYouModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    submitForm() {
      this.form.Token = localStorage.getItem("Token");
      axios.post("https://smartsalesagent-api.azurewebsites.net/SmartSalesAgent/Registro", this.form)
        .then(data => {
          console.log(data);
          // Mostrar notificación de éxito
          toast.success("¡Registro creado con éxito!", {
            autoClose: 3000,
          });
          this.isThankYouModalVisible = true;
        })
        .catch(error => {
          console.error(error);
          // Mostrar notificación de error
          toast.error("Hubo un error al crear el registro.", {
            autoClose: 3000,
          });
        });
      this.isModalVisible = false;
    },
    hideThankYouModal() {
      this.isThankYouModalVisible = false;
      this.$router.push("/");
    }
  }
};
</script>

<template>
	 <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
    <div class="project-bg">
		<div class="form-container">
        <form @submit.prevent="showModal">
            <div class="input-group">
                <input type="text" id="nombre" name="nombre" placeholder="Nombre completo" required v-model="form.nombre">
                <input type="email" id="correo" name="correo" placeholder="Correo electrónico" required v-model="form.correo">
            </div>
            <div class="input-group">
                <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" required v-model="form.telefono">
                <input type="text" id="empresa" name="empresa" placeholder="Empresa" required v-model="form.nombreEmpresa">
            </div>
            <textarea id="mensaje" name="mensaje" placeholder="Mensaje (opcional)" required v-model="form.mensaje"></textarea>
            <button type="submit">COMIENZA AHORA</button>
        </form>
    </div>
 	</div>
	 <div v-if="isModalVisible" class="modal">
      <div class="modal-content">
        <p>¿Estás seguro de que quieres enviar el formulario?</p>
        <button @click="submitForm">Aceptar</button>
        <button @click="hideModal">Cancelar</button>
      </div>
    </div>

    <div v-if="isThankYouModalVisible" class="modal">
      <div class="modal-content">
        <i class="fa-solid fa-circle-check" style="color: green; font-size: 5em;"></i>
        <p>Gracias por contactarnos, nos estaremos comunicando contigo en breve.</p>
        <button @click="hideThankYouModal">Cerrar</button>
      </div>
    </div>
</template>

<style scoped>
.form-container {
	position: relative;
	text-align: center;
	left: 84px;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 1200px;
	height: 420px;
    max-width: 90%; /* Se asegura de que se vea bien en pantallas pequeñas */
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.modal-content {
  width: 50%;
  background-color: white;
  padding: 20px;
  border-radius: 1px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}

.modal-content button {
  margin: 10px;
  left: 10px;
  display: inline-block;
  border-radius: 10px;
}

/* Inputs y Textarea */
input, textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
	color: #000;
}

textarea {
    height: 100px;
}

/* Botón */
button {
    width: 20%;
    padding: 10px;
    background-color: #fff; /* Fondo blanco */
    color: rgba(3, 15, 39, 0.8); /* Texto en azul */
    border: 2px solid #007BFF; /* Borde azul */
    border-radius: 5px; /* Bordes redondeados */
    font-weight: bold; /* Texto en negrita */
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
    background-color: #007BFF; /* Fondo azul al pasar el ratón */
    color: #fff; /* Texto blanco al pasar el ratón */
}

/* Input Group */
.input-group {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

input[type="text"], input[type="email"], input[type="tel"] {
    flex: 1;
}




@media (max-width: 768px) {
	.form-container {
	position: relative;
	text-align: center;
	left: 27px;
	top: 31px;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 1200px;
	height: 420px;
    max-width: 90%; /* Se asegura de que se vea bien en pantallas pequeñas */
}
button {
    width: 47%;
    
}

}
</style>