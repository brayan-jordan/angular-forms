import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ViaCepService } from "../services/viacep.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(private router: Router, private viaCepService: ViaCepService) {}

  ngOnInit(): void {}

  consultaCep(event: any, f: NgForm) {
    const cep = event.target.value;
    if (cep) {
      this.viaCepService.getConsultaCep(cep).subscribe((resultado) => {
        this.populaDados(resultado, f);
      });
    }
  }

  populaDados(dados: any, formulario: NgForm) {
    formulario.form.patchValue({
      endereco: dados.logradouro,
      complemeneto: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(["/sucesso"]);
    } else {
      alert("Formulário inválido!");
    }
  }
}
