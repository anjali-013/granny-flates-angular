// import { Component, OnInit } from '@angular/core';
// // import { TranslateService } from '@ngx-translate/core';
// // import { HttpClient } from '@angular/common/http';
// // import { catchError } from 'rxjs/operators';
// // import { of } from 'rxjs';

// // import { TranslationService } from './translation.service';


// import { HeaderComponent } from "./header/header.component";

// @Component({
//   selector: 'app-root',
//   standalone: false,
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']  // Corrected from 'styleUrl' to 'styleUrls'
// })
// export class AppComponent  {
//   // title = 'angular-app';

//   // constructor(
//   //   private translationService: TranslationService,
//   //   private translate: TranslateService  // Inject TranslateService from @ngx-translate/core
//   // ) {}

//   // ngOnInit(): void {
//   //   // Load default language (en) when the component initializes
//   //   this.loadTranslations('en');
//   // }

//   // // Method to load translations and handle errors gracefully
//   // loadTranslations(language: string) {
//   //   this.translationService.loadTranslation(language).subscribe(data => {
//   //     if (Object.keys(data).length > 0) {
//   //       // Successfully loaded translation
//   //       console.log('Translation loaded successfully:', data);

//   //       // Use @ngx-translate/core to set the language in the app
//   //       this.translate.use(language);
//   //     } else {
//   //       // Handle the case where translation file failed to load
//   //       // console.error('Failed to load translation for:', language);
//   //     }
//   //   });
//   // }

//   // // Method to switch language using ngx-translate
//   // switchLanguage(language: string) {
//   //   this.translate.use(language);  // Use ngx-translate to switch language
//   // }
// }

import { Component, inject,OnInit } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
