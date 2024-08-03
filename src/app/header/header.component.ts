import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  animclass:string = ""
  countevent: number = 0
  toggleclick() {
    this.countevent++
    if(this.countevent % 2 === 1){this.animclass = "active";document.body.classList.add("no-scroll")} else{this.animclass = "";document.body.classList.remove("no-scroll")}
  }

}
