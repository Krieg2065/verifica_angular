import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  burzum  : string;

  constructor() { 
    this.burzum  = "quarto"; 
  }
  ngOnInit(): void {
  }

}
