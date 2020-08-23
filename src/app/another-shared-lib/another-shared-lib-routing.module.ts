import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnotherSharedPageComponent } from 'common-components';

const routes: Routes = [{ path: '', component: AnotherSharedPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotherSharedLibRoutingModule {}
