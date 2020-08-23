import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'shared-page',
    loadChildren: () =>
      import('./shared-lib/shared-lib.module').then((m) => m.SharedLibModule),
  },
  {
    path: 'another-shared-page',
    loadChildren: () =>
      import('./another-shared-lib/another-shared-lib.module').then(
        (m) => m.AnotherSharedLibModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
