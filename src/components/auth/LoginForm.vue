<script setup lang="ts">
import { ref } from 'vue';
const checkbox = ref(true);

const errorLogin = ref('');

import axios from 'axios';
import { useField, useForm } from 'vee-validate';
import { object, string, number, date, InferType } from 'yup';
import { useRouter } from 'vue-router';

const router = useRouter();

const schema = object({
    email: string().email().required().label('Email'),
    password: string().required().label('Senha'),
})

const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: schema,   
})

const submit = handleSubmit(async (values) => {
    await login(values);
})

const {value: email } = useField('email')
const { value: password } = useField('password')

function login(values){
errorLogin.value = '';

axios.get('/sanctum/csrf-cookie')
    .then(() => {
        axios.post('/api/login', {
            'email': values.email,
            'password': values.password
        }).then((response) => {
            console.log(response);
            router.push({ name: 'dashboard' });
        }).catch((error) => {
            console.log(error);
            errorLogin.value = 'Usuário ou senha inválidos';
        });
    }).catch((error) => {
        console.log(error);
    });
}

</script>

<template>
    <v-form @submit.prevent="submit">
        <v-row class="d-flex mb-3">
            <v-alert v-if="errorLogin" type="error">{{ errorLogin }}</v-alert>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Usuário</v-label>
                <v-text-field v-model="email" :error-messages="errors.email" variant="outlined" color="primary"/>
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field v-model="password" :error-messages="errors.password" variant="outlined" type="password"  color="primary"/>
            </v-col>
            <v-col cols="12" class="pt-0">
                <div class="d-flex flex-wrap align-center ml-n2">                
                    <div class="ml-sm-auto">
                        <RouterLink to="/"
                            class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Esqueci minha senha
                        </RouterLink>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-btn type="submit" :loading="isSubmitting" color="primary" size="large" block   flat>Entrar</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>
