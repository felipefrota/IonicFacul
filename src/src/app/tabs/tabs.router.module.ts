import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../reunioes/reunioes.module').then(m => m.ReunioesPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../conta/login/login.module').then(m => m.LoginPageModule)
          }
        ]
      },
     
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../ata/ata.module').then(m => m.AtaPageModule)
          }
        ]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../conta/register/register.module').then(m => m.RegisterPageModule)
          }
        ]
      },
      {
        path: 'tab6',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../agenda/agenda.module').then(m => m.AgendaPageModule)
          }
        ]
      },
      {
        path: 'tab7',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../usuarios/usuarios.module').then(m => m.UsuariosPageModule)
          }
        ]
      },
     
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
