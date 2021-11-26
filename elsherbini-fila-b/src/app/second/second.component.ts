import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  burzum  : string;

  constructor() { 
    this.burzum  = "secondo"; 
  }
  ngOnInit(): void {
  }

}
