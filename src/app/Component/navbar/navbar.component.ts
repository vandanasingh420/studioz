import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    previousUrl: string = '';
    constructor(private location: Location) { }
    ngOnInit(): void {
    }
    previousPath() {
        this.location.back();
    }
}
