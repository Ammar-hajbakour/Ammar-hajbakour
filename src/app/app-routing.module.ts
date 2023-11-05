import { CertificatesComponent } from './components/certificates/certificates.component';
import { PersonalSkillsComponent } from './components/personal-skills/personal-skills.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'p-skills', component: PersonalSkillsComponent },
  { path: 'certificates', component: CertificatesComponent } ,
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
