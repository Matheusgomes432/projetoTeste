import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  habilitadoPainel1: boolean = false; 
  habilitadoPainel2: boolean = false; 
  habilitarDrop: boolean = false;

  @Output() eventoPainel1: EventEmitter<any> = new EventEmitter();
  @Output() eventoPainel2: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  controleDePaineis(painel:string) {

    if(painel == "painel1" && this.habilitadoPainel1 == false){
      this.painel1(true)
      this.painel2(false)
    }
    else {
      this.painel1(false)
    }
    if(painel == "painel2" && this.habilitadoPainel2 == false){
      this.painel2(true)
      this.painel1(false)
    }
    else{
      this.painel2(false)
    }
  }

  painel1(status: boolean) {
    this.habilitadoPainel1 = status;
    this.eventoPainel1.emit(this.habilitadoPainel1);
  }
  painel2(status: boolean) {
    this.habilitadoPainel2 = status;
    this.eventoPainel2.emit(this.habilitadoPainel2)
  }
}
