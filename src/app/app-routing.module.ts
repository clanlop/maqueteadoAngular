import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { MiPerfilComponent } from './index/mi-perfil/mi-perfil.component';


const routes: Routes = 
[{path:'index',component:IndexComponent},
{path:'deshboard',component:DeshboardComponent},
{path:'',redirectTo:'/',pathMatch:'full'},
{path:'**',component:ErrorComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
