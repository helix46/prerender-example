import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedPageRoutingModule } from './shared-page-routing.module';
import { SharedPageComponent } from './shared-page.component';

@NgModule({
  declarations: [SharedPageComponent],
  imports: [
    CommonModule,
    // SharedPageRoutingModule
  ],
})
export class SharedPageModule {}
