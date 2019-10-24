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
  producto:number[][] = [];
  clave:number[][] = [[2,0,0],[4,3,0],[16,6,10]];
  claveInversa:number[][]=[[1/2,0,0],[-2/3,1/3,0],[-2/5,-1/5,1/10]];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.Formulario.get('mensaje').valueChanges.subscribe( mensaje => {
      this.matriz = this.generarMatriz(mensaje);
      this.Formulario.patchValue({
        mensajeAscii: this.matriz,
        clave: this.clave
      });
      this.cifrar();
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
    this.multiplicarMatrices(this.matriz, this.clave);
  }

  descifrar(){
    console.log('descifrando');
  }

  multiplicarMatrices( matriz1: number[][], matriz2: number[][] ) {
    console.clear();
    let producto = [];
    for(let i=0;i<matriz1.length;i++) {
      let fila=[];
      for(let j=0;j<matriz2[0].length;j++) {
        fila.push(this.sumaProductos(i,j,matriz1,matriz2));
      }
      producto.push(fila);
    }
    this.producto = producto;
  }

  sumaProductos( posx: number, posy: number, matriz1: number[][], matriz2: number[][]) {
    let suma = 0;
    for(let i=0; i<matriz1[0].length; i++) {
      suma += matriz1[posx][i]*matriz2[i][posy];
    }
    return suma;
  }

  matrizVacia( matriz1: number[][], matriz2: number[][] ) {
    return new Array(matriz1.length).fill(new Array(matriz2[0].length).fill(0));
  }

}