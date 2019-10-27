import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  Formulario = this.fb.group({
    mensaje: [''],
    mensajeADescifrar: [''],
  });

  matriz:number[][] = [];
  mensajeCifrado:number[][] = [];
  clave:number[][] = [[2,0,0],[4,3,0],[16,6,10]];
  claveInversa:number[][]=[[1/2,0,0],[-2/3,1/3,0],[-2/5,-1/5,1/10]];
  mensajeDescifrado: string = '';

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  generarMatrizDesdeMensaje( mensaje: string ) {
    let matriz:number[][]=[];
    let agregarFila = true;
    let fila=0,col=0;
    for(let i=0;i<mensaje.length;i++) {
      if(agregarFila) {
        matriz.push([0,0,0]);
      }
      matriz[fila][col]=mensaje.charCodeAt(i);
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

  generarMatrizDesdeArreglo( arreglo: number[] ) {
    let matriz:number[][]=[];
    let agregarFila = true;
    let fila=0,col=0;
    arreglo.forEach( (numero,i)=> {
      if(agregarFila) {
        matriz.push([0,0,0]);
      }
      matriz[fila][col]=numero;
      if(col==2) {
        col=0;
        fila++;
        agregarFila=true;
      } else {
        agregarFila=false;
        col++;
      }
    });
    
    return matriz;
  }

  caracterANumero( caracter: string ) {
    if(caracter) return caracter.charCodeAt(0);
    return -1;
  }

  cadenaANumero( cadena: string ) {
    return Number.parseInt(cadena);
  }

  cifrar(){
    let mensaje = this.Formulario.controls['mensaje'].value;
    this.matriz = this.generarMatrizDesdeMensaje(mensaje);
    this.mensajeCifrado = this.multiplicarMatrices(this.matriz, this.clave);
    this.mensajeDescifrado = null;
  }

  descifrar(){
    let mensajeADescifrar: string = this.Formulario.controls['mensajeADescifrar'].value;
    let arregloMensajeADescifrar: number[] = mensajeADescifrar.split(',').map(elem => this.cadenaANumero(elem) );
    let matrizADescifrar = this.generarMatrizDesdeArreglo(arregloMensajeADescifrar);
    let producto = this.multiplicarMatrices(matrizADescifrar, this.claveInversa);
    this.mensajeDescifrado = this.matrizAMensaje(producto);
    this.mensajeCifrado=[];
  }

  multiplicarMatrices( matriz1: number[][], matriz2: number[][] ) {
    let producto = [];
    for(let i=0;i<matriz1.length;i++) {
      let fila=[];
      for(let j=0;j<matriz2[0].length;j++) {
        fila.push(this.sumaProductos(i,j,matriz1,matriz2));
      }
      producto.push(fila);
    }
    return producto;
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

  matrizAMensaje( matriz: number[][]) {
    let mensaje = '';
    matriz.forEach((fila:number[]) => {
      fila.forEach( numero => {
        mensaje += String.fromCharCode(numero);
      })
    });
    return mensaje;
  }

}