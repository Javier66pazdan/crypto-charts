import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'crypto-list', pathMatch: 'full'},
  {path: 'crypto-list', loadChildren: () => import('./modules/crypto/crypto.module').then(m => m.CryptoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
