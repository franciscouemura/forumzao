import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './layouts/public/public.component';
import { SecureComponent } from './layouts/secure/secure.component';
import { HomeComponent } from './pages/home/home.component';
import { NewTopicComponent } from './pages/new-topic/new-topic.component';

const routes: Routes = [
  {path: '', component: PublicComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'new-topic', component: NewTopicComponent},
  ]},
  {path: '', component: SecureComponent, children: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
