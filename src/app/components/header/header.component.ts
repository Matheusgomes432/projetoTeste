import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output() emitirEventoHome1: EventEmitter<any> = new EventEmitter()
    @Output() emitirEventoHome2: EventEmitter<any> = new EventEmitter()
    constructor() { }

  ngOnInit(): void {
  }
  recebeStatusPainel1(event: any){
    this.emitirEventoHome1.emit(event);
  }
  recebeStatusPainel2(event: any){
    this.emitirEventoHome2.emit(event);
  }
}