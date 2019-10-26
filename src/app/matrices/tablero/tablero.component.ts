import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  Formulario = this.fb.group({
    mensaje: [''],
    mensajeAscii: [''],
    clave: ['[2,0,0,4,3,0,16,6,10]'],
    resultado: [''],
  });

  matriz:number[][] = [];
  producto:number[][] = [];
  clave:number[][] = [[2,0,0],[4,3,0],[16,6,10]];
  claveInversa:number[][]=[[1/2,0,0],[-2/3,1/3,0],[-2/5,-1/5,1/10]];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}