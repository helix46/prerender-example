import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherSharedPageRoutingModule } from './another-shared-page-routing.module';
import { AnotherSharedPageComponent } from './another-shared-page.component';


@NgModule({
  declarations: [AnotherSharedPageComponent],
  imports: [
    CommonModule,
    AnotherSharedPageRoutingModule
  ]
})
export class AnotherSharedPageModule { }
