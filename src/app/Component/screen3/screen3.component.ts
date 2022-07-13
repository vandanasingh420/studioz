import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-screen3',
    templateUrl: './screen3.component.html',
    styleUrls: ['./screen3.component.css']
})
export class Screen3Component implements OnInit {

    constructor(public router: Router) { }

    ngOnInit(): void {
    }
    redirect() {
        this.router.navigate(['/Screen4'])
    }
}
