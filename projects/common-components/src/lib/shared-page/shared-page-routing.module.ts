import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedPageComponent } from './shared-page.component';

const routes: Routes = [{ path: '', component: SharedPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedPageRoutingModule {}
