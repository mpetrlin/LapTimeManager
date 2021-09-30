import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'public', component: PublicComponent},
  {path: 'administration', component: AdminComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
