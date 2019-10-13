import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'reunioes', loadChildren: './reunioes/reunioes.module#ReunioesPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'conta', loadChildren: './conta/conta.module#ContaPageModule' },
  { path: 'cadastro', loadChildren: './conta/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'login', loadChildren: './conta/login/login.module#LoginPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
