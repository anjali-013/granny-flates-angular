import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-services',
  standalone: false,
  
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  slideheading1 = 'Proin gravida ';
  ngAfterViewInit() {
    
    if (typeof window !== 'undefined')
      $('#owl-example4').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        center: true,
        navText: [
          '<img src="assets/images/prev1.png" alt="Previous" />',
          '<img src="assets/images/n1.png" alt="Next" />'
        ],
        // autoplay: true,
        // autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          500: {
            items: 1
          },
        767: {
            items: 3
          },
          1499: {
            items: 3
          }
        }
      });
    }

}
