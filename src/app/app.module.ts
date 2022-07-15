import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Screen1Component } from './Component/screen1/screen1.component';
import { Screen2Component } from './Component/screen2/screen2.component';
import { Screen3Component } from './Component/screen3/screen3.component';
import { Screen4Component } from './Component/screen4/screen4.component';
import { Screen5Component } from './Component/screen5/screen5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdNavBasicModule } from './directive/nav-basic.module';
import { TabsModule, TabsetConfig } from 'ngx-bootstrap/tabs';
import { FilterPipe } from './directive/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Component/navbar/navbar.component';
@NgModule({
    declarations: [
        AppComponent,
        Screen1Component,
        Screen2Component,
        Screen3Component,
        Screen4Component,
        Screen5Component,
        FilterPipe,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        NgbdNavBasicModule,
        TabsModule,
        Ng2SearchPipeModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
