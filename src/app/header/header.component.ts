import{ TranslateModule, TranslateService } from '@ngx-translate/core';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  //  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 constructor(translate: TranslateService,private dialog: MatDialog) {
    translate.addLangs(['en', 'hi', 'de', 'fr']); // ✅ Ensure all languages are listed
    translate.setDefaultLang('en');
  } 
 

  translate: TranslateService =inject(TranslateService);
  
    translateText(lang: string){
  this.translate.use(lang);
    }
  
    openLogin(): void {
      this.dialog.open(LoginComponent); // This opens the LoginComponent dialog
    }
  }
  