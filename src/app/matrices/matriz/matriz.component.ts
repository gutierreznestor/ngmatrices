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
    mensajeCifrado: [''],
    clave: [''],
    cifrado: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.Formulario.get('mensaje').valueChanges.subscribe( mensaje => {
      this.generarMatriz(mensaje);
    });
  }

  generarMatriz( cadena: string ) {
    console.clear();
    console.log(this.convertirANumero(cadena[0]));
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