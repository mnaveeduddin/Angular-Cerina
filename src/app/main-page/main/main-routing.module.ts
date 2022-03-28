import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  {path: '', component: MainContentComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'careers', component: CareersComponent},
    { path: 'contact', component: ContactComponent},
    { path: '', redirectTo: '/main-page/home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
