import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginSuccessDialogComponent } from './login-success-dialog/login-success-dialog.component';
import { LoginFailedDialogComponent } from './login-failed-dialog/login-failed-dialog.component';
import { RegistrationSucessDialogComponent } from './registration-sucess-dialog/registration-sucess-dialog.component';
import { ServicesComponent } from './services/services.component';
 import { ProjectComponent } from './project/project.component';
 import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
 import { TranslateHttpLoader } from '@ngx-translate/http-loader';
 import { HttpClient} from '@angular/common/http';
 import { withFetch } from '@angular/common/http';
 

 import {  HTTP_INTERCEPTORS } from '@angular/common/http';
 import { ErrorHandler } from '@angular/core';
 
//  import {  TranslateService } from '@ngx-translate/core';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({


  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    LoginComponent,
    RegistrationComponent,
    LoginSuccessDialogComponent,
    LoginFailedDialogComponent,
    RegistrationSucessDialogComponent,
    ServicesComponent,
    ProjectComponent,
    AboutComponent,
    GalleryComponent ,

  ],
  
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    ServerModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    CarouselModule,
    MatDialogModule,
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    
  ],

  

  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideHttpClient(withFetch()),
  ],
  
  bootstrap: [AppComponent]
  
})
export class AppModule  { 

}

