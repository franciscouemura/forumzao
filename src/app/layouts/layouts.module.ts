import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure/secure.component';
import { PublicComponent } from './public/public.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [SecureComponent, PublicComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule, 
    MatButtonModule,
    PagesModule
  ],
})
export class LayoutsModule { }
