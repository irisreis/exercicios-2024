import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {
  mostrarTextoCompleto: boolean= false;
  mostrarRespostas: boolean= false;
  criarNovoTopico: boolean= false;

  constructor() {
   }

  ngOnInit(): void {
  }

  alternarTexto(): void {
    this.mostrarTextoCompleto = !this.mostrarTextoCompleto;
  }
  alternarResposta(): void{
    this.mostrarRespostas= !this.mostrarRespostas;
  }
  criarTopico(): void{
    this.criarNovoTopico= !this.criarNovoTopico;
  }

}
