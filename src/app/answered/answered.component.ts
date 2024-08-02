import { Component } from '@angular/core';

@Component({
  selector: 'app-answered',
  templateUrl: './answered.component.html',
  styleUrl: './answered.component.css'
})
export class AnsweredComponent {

  clas = 'active'

  list1class = 'active'
  list2class = ''
  list3class = ''
  list4class = ''
  list5class = ''


  list1Fn(){
    this.list1class = 'active'
    this.list2class = ''
    this.list3class = ''
    this.list4class = ''
    this.list5class = ''
  }
  list2Fn(){
    this.list1class = ''
    this.list2class = 'active'
    this.list3class = ''
    this.list4class = ''
    this.list5class = ''
  }
  list3Fn(){
    this.list1class = ''
    this.list2class = ''
    this.list3class = 'active'
    this.list4class = ''
    this.list5class = ''
  }
  list4Fn(){
    this.list1class = ''
    this.list2class = ''
    this.list3class = ''
    this.list4class = 'active'
    this.list5class = ''
  }
  list5Fn(){
    this.list1class = ''
    this.list2class = ''
    this.list3class = ''
    this.list4class = ''
    this.list5class = 'active'
  }
  
  
}
