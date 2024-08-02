import { Component } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {


  ngOnInit(){
    var splide = new Splide( '.splide', {
      perPage: 4,
      focus  : 0,
      omitEnd: true,
      breakpoints: {
        1250: {
          perPage: 3,
        },
        950: {
          perPage: 2.5,
        },
        810: {
          perPage: 2,
        },
        622: {
          perPage: 1.7,
        },
        540:{
          perPage: 1,
        }
      },
      
    } );
    
    splide.mount();
  }

}

interface OnInit {
  ngOnInit(): void
}