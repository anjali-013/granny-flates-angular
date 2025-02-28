import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import{FooterComponent} from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import{ThankYouComponent}from './thank-you/thank-you.component';
import { ProjectComponent } from './project/project.component';

import path from 'node:path';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  {path:'sign in',component:LoginComponent},
  { path: 'home', component: HomeComponent },
  {path:'services',component: ServicesComponent},
  { path: 'footer', component: FooterComponent },
  { path: 'carousal', component: CarouselComponent },
 { path: 'about', component: AboutComponent},
  {path:'project',component:ProjectComponent},
  {path:'gallery',component:GalleryComponent },
  { path: 'sign up', component: RegistrationComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })]

})
export class AppRoutingModule {
 }
