import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'https://loiane.training';
  cursoAngular = true;
  urlImagem = 'https://loremflickr.com/320/240';
  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;

  constructor() { }

  ngOnInit() {
  }

  getValor() {
    return 2;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Olá! Tudo Bem');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor (valorEnter) {
    this.valorSalvo = valorEnter;
  }

  onMouse () {
    this.isMouseOver = !this.isMouseOver;
  }

}
