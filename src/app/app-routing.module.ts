import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen1Component } from './Component/screen1/screen1.component';
import { Screen2Component } from './Component/screen2/screen2.component';
import { Screen3Component } from './Component/screen3/screen3.component';
import { Screen4Component } from './Component/screen4/screen4.component';
import { Screen5Component } from './Component/screen5/screen5.component';

const routes: Routes = [
    {
        path: 'Screen1', component: Screen1Component
    },
    {
        path: 'Screen2', component: Screen2Component
    },
    {
        path: 'Screen3', component: Screen3Component
    },
    {
        path: 'Screen4', component: Screen4Component
    },
    {
        path: 'Screen5', component: Screen5Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
