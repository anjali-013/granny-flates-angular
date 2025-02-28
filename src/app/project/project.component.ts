import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})

export class ProjectComponent {
  title1 = 'In-Law Unit';
  date = '21/08/2020';
  description = 'Proin gravida nibh vel velit auctor aliquet.';

 
  ngAfterViewInit() {
    // Initialize Owl Carousel with custom navigation and other options
    if (typeof window !== 'undefined')
      $('#owl-example5').owlCarousel({
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
