import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PublishTestComponent } from './publish-test/publish-test.component';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'publish-test', component: PublishTestComponent},
  { path: 'instruction-page', component: InstructionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
