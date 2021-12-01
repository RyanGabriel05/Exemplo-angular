import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "produtos", component: ProdutosComponent},
  { path: "sobre", component: SobreComponent },
  { path: "login", component: LoginComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
