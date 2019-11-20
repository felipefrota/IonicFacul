import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'reunioes', loadChildren: './reunioes/reunioes.module#ReunioesPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },

  { path: 'login', loadChildren: './conta/login/login.module#LoginPageModule' },
  { path: 'ata', loadChildren: './ata/ata.module#AtaPageModule' },
  { path: 'register', loadChildren: './conta/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './conta/login/login.module#LoginPageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosPageModule' },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
