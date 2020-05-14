import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';
import { SamplePageOneComponent } from './sample-page-one/sample-page-one.component';
import { SamplePageTwoComponent } from './sample-page-two/sample-page-two.component';
import { SamplePageThreeComponent } from './sample-page-three/sample-page-three.component';

const routes: Routes = [
  { path: '', component: TestPageComponent, children: [
    { path: 'page-1', component: SamplePageOneComponent },
    { path: 'page-2', component: SamplePageTwoComponent },
    { path: 'page-3', component: SamplePageThreeComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
