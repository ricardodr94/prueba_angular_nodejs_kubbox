import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

//peticion Http
import { HttpClientModule } from '@angular/common/http';

//servicios
import { ApiNodeService } from './services/api-node.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [ApiNodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
