import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublishTestComponent } from './publish-test/publish-test.component';
import { MysqlService } from './services/mysql.service';
import { HttpModule } from '@angular/http';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublishTestComponent,
    InstructionPageComponent,
    QuestionsPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [MysqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
