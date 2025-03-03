import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageOwnerComponent } from './managing-owner/components/managing-owner.component';
import { OwnerDetailsComponent } from './owner-details/components/managing-owner-details.component';
import { ZoyCodeComponent } from './zoy-code/components/zoy-code.component';


const routes: Routes = [
  { path: 'zoy-code', component: ZoyCodeComponent},
  { path: 'manage-owner', component: ManageOwnerComponent},
  { path: 'manage-owner-details', component: OwnerDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppOwnerMenuRoutingModule { }