import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' } },
    { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
    { path: '**', component: PagenotfoundComponent, data: { title: '404' } },
];
