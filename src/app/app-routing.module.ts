import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PublishTestComponent } from './publish-test/publish-test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'publish-test', component: PublishTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
