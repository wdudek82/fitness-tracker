import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";
import { TrainingModule } from "./training/training.module";
import { SharedModule } from "./shared/shared.module";
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    TrainingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
