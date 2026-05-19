import { Routes } from '@angular/router';
import { Signup } from './pages/signup/signup';
import { Welcome } from './pages/welcome/welcome';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: "",
        component: Welcome
    },
    {
        path: "signup",
        component: Signup
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "home",
        component: Home
    }
];
