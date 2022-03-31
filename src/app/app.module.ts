import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebitCardComponent } from './views/debit-card/debit-card.component';
import { FormComponent } from './views/form/form.component';
import { CounterOutputComponent } from './views/counter-output/counter-output.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { CounterComponent } from './views/counter/counter.component';
import { CounterButtonsComponent } from './views/counter-buttons/counter-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    DebitCardComponent,
    FormComponent,
    CounterOutputComponent,
    NavBarComponent,
    CounterComponent,
    CounterButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
