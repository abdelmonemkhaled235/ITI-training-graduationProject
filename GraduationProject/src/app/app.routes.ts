import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResultsComponent } from './results/results.component';
import { ResultComponent } from './result/result.component';
import { PrototypeComponent } from './prototype/prototype.component';



export const routes: Routes = [
    {path:'', component : HomeComponent , title:"Zagazig University|Home"},
    {path:'contact' , component:ContactComponent , title:"Zagazig University|Contact"},
    {path:'about' , component:AboutComponent , title:"Zagazig University|About"},
    {path:'results' , component:ResultsComponent , title:"Zagazig University|Results"},
    {path:'result' , component:ResultComponent , title:"Zagazig University|Results"},
    {path:'prototype' , component:PrototypeComponent , title:"Zagazig University|ProtoType"},
    {path:'**' , component:PrototypeComponent , title:"Zagazig University|ProtoType"},
];
