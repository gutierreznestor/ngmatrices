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
      
    });
  }

  cifrar(){
    console.log('cifrando');
  }

  descifrar(){
    console.log('descifrando');
  }

}