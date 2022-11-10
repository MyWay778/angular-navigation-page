import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './pages/navigator/navigator.component';
import { TableComponent } from './components/table/table.component';
import { TabListComponent } from './components/tab-list/tab-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ClientTableComponent } from './composed_components/client-table/client-table.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    TableComponent,
    TabListComponent,
    NotFoundComponent,
    ClientTableComponent,
    SpinnerComponent,
    AlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
