import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublishTestComponent } from './publish-test/publish-test.component';
import { InstructionPageComponent } from './instruction-page/instruction-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublishTestComponent,
    InstructionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
