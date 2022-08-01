import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BienvenidaPageComponent} from '../../../modulos/bienvenida/pages';
import {BienvenidaModule} from '../../../modulos/bienvenida/bienvenida.module';
import {MainComponent} from './main.component';
import {SharedPagesModule} from '../shared-pages.module';
import {InicioPageComponent} from "../../../modulos/inicio/pages";
import {InicioModule} from "../../../modulos/inicio/inicio-module";
import {MiembrosPageComponent} from "../../../modulos/miembros/pages";
import {MiembrosModule} from "../../../modulos/miembros/miembros.module";
import {UsuariosPageComponent} from "../../../modulos/usuarios/pages/usuarios-page/usuarios-page.component";
import {UsuariosModule} from "../../../modulos/usuarios/usuarios.module";


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inicio'
      },
      {
        path: 'inicio',
        component: InicioPageComponent,
      },
      {
        path: 'bienvenida',
        component: BienvenidaPageComponent
      },
      {
        path: 'miembros',
        component: MiembrosPageComponent
      },
      {
        path: 'usuarios',
        component: UsuariosPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    BienvenidaModule,
    MiembrosModule,
    InicioModule,
    UsuariosModule,
    SharedPagesModule],
  exports: [RouterModule]
})
export class MainNavRouting { }
