import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatalinksComponent } from './datalinks/datalinks.component';

import { HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes:Routes=[
  {
    path:"",component:DatalinksComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatalinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
