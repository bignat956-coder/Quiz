import { registerAppScopedDispatcher } from '@angular/core/primitives/event-dispatch';
import { Routes } from '@angular/router';
import { Signup } from './modules/auth/signup/signup';

export const routes: Routes = [
{path:'register', component: Signup}

];
