import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userModel = new User();

  mensagem = "";

  // UsuarioCadastro = new User();
  // mensagemCadastro = "";

  
  onSubmit() {

    console.log("Modelo", this.userModel)

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra => {
      if(this.userModel.email.toLowerCase().includes(palavra)) {
        this.mensagem = "Dados inválidos: " + palavra

        return;
      }
    });

    this.loginService.login(this.userModel).subscribe( (response) => {
      this.mensagem = "login com sucesso!";
      this.router.navigateByUrl("/");
    }, (error) => {
      this.mensagem = error.error;
    } )

    // onSubmitCadastro(): void {
    //   this.loginService.cadastrar(this.UsuarioCadastro).subscribe( (response) => {
    //     this.mensagemCadastro = "Cadastro feito com sucesso!";
    //   }, (error) => {
    //       this.mensagemCadastro = error.error
    //   } )
    // }
  }
}
