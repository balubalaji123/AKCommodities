import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
const routes: Routes = [
  {path:'',component:LoginPageComponent,pathMatch:'full'},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginPageComponent},
  {path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'student-details/:id',component:StudentDetailsComponent,canActivate:[AuthGuard]},
  {path:'**',component:LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
