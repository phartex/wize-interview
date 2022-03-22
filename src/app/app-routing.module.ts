import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitCardComponent } from './views/debit-card/debit-card.component';
import { FormComponent } from './views/form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full',
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'debit-card',
    component: DebitCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
