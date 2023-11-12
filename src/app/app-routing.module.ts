import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { RegisterClothComponent } from './pages/register-cloth/register-cloth.component';
import { UserComponent } from './pages/user/user.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ReportComponent } from './pages/report/report.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'regCloth',
    component: RegisterClothComponent,
  },
  {
    path: 'inventory',
    component: InventoryComponent,
  },
  {
    path: 'reports',
    component: ReportComponent,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
