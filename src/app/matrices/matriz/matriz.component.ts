import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit {

  Formulario = this.fb.group({
    mensaje: [''],
    mensajeAscii: [''],
    clave: [''],
    cifrado: [''],
  });

  matriz:number[][] = [];
  clave:number[][] = [[2,0,0],[4,3,0],[16,6,10]];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.Formulario.get('mensaje').valueChanges.subscribe( mensaje => {
      this.matriz = this.generarMatriz(mensaje);
      this.Formulario.patchValue({
        mensajeAscii: this.matriz,
      });
    });
  }

  generarMatriz( cadena: string ) {
    let matriz:number[][]=[];
    let agregarFila = true;
    let fila=0,col=0;
    for(let i=0;i<cadena.length;i++) {
      if(agregarFila) {
        matriz.push([0,0,0]);
      }
      matriz[fila][col]=cadena.charCodeAt(i);
      if(col==2) {
        col=0;
        fila++;
        agregarFila=true;
      } else {
        agregarFila=false;
        col++;
      }
    }
    return matriz;
  }

  convertirANumero( caracter: string ) {
    if(caracter) return caracter.charCodeAt(0);
    return -1;
  }

  cifrar(){
    console.log('cifrando');
  }

  descifrar(){
    console.log('descifrando');
  }

}