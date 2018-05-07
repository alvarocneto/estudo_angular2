import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-data-form",
  templateUrl: "./data-form.component.html",
  styleUrls: ["./data-form.component.css"]
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3) ]],
      email: [null, [Validators.required, Validators.email] ],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required ]],
        numero: [null, [Validators.required ]],
        complemento: [null],
        rua: [null, [Validators.required ]],
        bairro: [null, [Validators.required ]],
        cidade: [null, [Validators.required ]],
        estado: [null, [Validators.required ]]
      })
    });
  }

  onSubmit() {
    console.log(this.formulario);
    this.http
      .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados);
        // reseta o form
        this.resetar();
      },
      (error: any) => alert('erro')
    );
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(nomeCampo) {
    const campo = this.formulario.get(nomeCampo);
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched ;
    }
  }
}
