import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-card',
  templateUrl: './sample-card.component.html',
  styleUrls: ['./sample-card.component.scss'],
})
export class SampleCardComponent {

  @Input() darkMode = false;

  text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur doloremque obcaecati doloribus vel explicabo nostrum ullam quos officia! Suscipit repudiandae laudantium mollitia deleniti eveniet? Quaerat esse nam minima?Accusantium!';

  constructor() { }

  onClick() {
    console.log('clicked');
    // this.isDarkMode = !this.isDarkMode;
  }

}
