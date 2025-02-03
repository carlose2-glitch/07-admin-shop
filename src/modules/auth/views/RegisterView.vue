<template>
  <h1 class="text-2xl font-semibold mb-4">Nueva cuenta</h1>
  <form @submit.prevent="Data">
    <!-- Username Input -->
    <div class="mb-4">
      <label for="name" class="block text-gray-600">Nombre</label>
      <input
        v-on:input="evaluateInputs"
        v-model="myForm.name"
        type="text"
        id="name"
        name="name"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Username Input -->
    <div class="mb-4">
      <label for="username" class="block text-gray-600">Email</label>
      <input
        v-on:input="evaluateInputs"
        v-model="myForm.email"
        type="email"
        id="email"
        name="email"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>
    <!-- Password Input -->
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Contraseña</label>
      <input
        v-on:input="evaluateInputs"
        v-model="myForm.password"
        type="password"
        id="password"
        name="password"
        class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        autocomplete="off"
      />
    </div>

    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Olvido la contraseña</a>
    </div>
    <!-- Login Button -->
    <button
      v-bind:disabled="validateButtom"
      type="submit"
      class="bg-blue-500 disabled:bg-slate-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
    >
      Crear cuenta
    </button>
  </form>
  <!-- Sign up  Link -->
  <div class="mt-6 text-blue-500 text-center">
    <RouterLink :to="{ name: 'login' }" class="hover:underline">Ingresar por aqui</RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useAuthStore } from '../stores/auth.store';

const authStore = useAuthStore();
const validateButtom = ref<boolean>(true);

const myForm = reactive({
  name: '',
  email: '',
  password: '',
});

const evaluateInputs = () => {
  if (myForm.name.trim() !== '' && myForm.email.trim() !== '' && myForm.password.trim() !== '') {
    validateButtom.value = false;
  } else {
    validateButtom.value = true;
  }
};
//esta funcion se ejecuta solo cuando el boton este habilitado
const Data = async () => {
  try {
    const result = await authStore.register(myForm.name, myForm.email, myForm.password);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
</script>
