import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { ChartModule } from 'primeng/chart';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { UserComponent } from './pages/user/user.component';
import { RegisterClothComponent } from './pages/register-cloth/register-cloth.component';
import { ReportComponent } from './pages/report/report.component';
import { AviableClothesComponent } from './pages/report/aviable-clothes/aviable-clothes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    InventoryComponent,
    UserComponent,
    RegisterClothComponent,
    ReportComponent,
    AviableClothesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
