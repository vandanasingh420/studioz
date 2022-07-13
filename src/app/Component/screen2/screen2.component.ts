import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-screen2',
    templateUrl: './screen2.component.html',
    styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {

    constructor(public router: Router) { }

    ngOnInit(): void {
    }
    list: any = [{
        "Title": 'Configure your door from scratch', 'subTitle': 'Residential, Commerical, Entry doors'
    },
    {
        "Title": 'Parts / Openers', 'subTitle': 'Order Parts and Openers'
    }, {
        "Title": 'Direct Item Entry', 'subTitle': 'Order Parts / Openers using a Product ID'
    },
    {
        "Title": 'Choose from favourites', 'subTitle': 'Re-order door from your favourites '
    },
    ]
    redirect(data: any) {
        if (data == "Configure your door from scratch") {
            this.router.navigate(['/Screen3'])
        }
    }
}
