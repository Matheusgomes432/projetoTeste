import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  habilitaPainel1: boolean = false
  habilitaPainel2: boolean = false;
 
  constructor() { }

  ngOnInit(): void {
  }

    recebeEvento(event: any){
      this.habilitaPainel1= event
    }

    recebeEvento2(event: any){
      this.habilitaPainel2= event
    }
   
}
