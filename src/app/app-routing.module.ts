import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'uddannelser', loadChildren: './educations/educations.module#EducationsModule' },
  { path: 'elevtyper', loadChildren: './student-types/student-type.module#StudentTypeModule' },
  { path: 'fag', loadChildren: './courses/courses.module#CoursesModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
