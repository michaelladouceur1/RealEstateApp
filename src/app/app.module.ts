import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { DashboardComponent } from './templates/dashboard/dashboard.component';
import { PropertiesComponent } from './templates/properties/properties.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PusherComponent } from './templates/pusher/pusher.component';
import { CardComponent } from './components/card/card.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    DashboardComponent,
    PropertiesComponent,
    SidebarComponent,
    PusherComponent,
    CardComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
