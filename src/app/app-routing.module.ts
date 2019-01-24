import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PublishTestComponent } from './publish-test/publish-test.component';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'publish-test', component: PublishTestComponent},
  { path: 'instruction-page', component: InstructionPageComponent},
  { path: 'questions-page', component: QuestionsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
