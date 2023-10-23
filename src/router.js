import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './components/LoginForm.vue';
import RegistrationForm from './components/RegistrationForm.vue';

const routes = [
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegistrationForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
