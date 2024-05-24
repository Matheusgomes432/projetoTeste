import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-de-quadros',
  templateUrl: './painel-de-quadros.component.html',
  styleUrls: ['./painel-de-quadros.component.css']
})
export class PainelDeQuadrosComponent implements OnInit {

  @Input() habilitadoPainel1: boolean = false; 
  @Input() habilitadoPainel2: boolean = false; 
  @Input() habilitarDrop: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

 
}