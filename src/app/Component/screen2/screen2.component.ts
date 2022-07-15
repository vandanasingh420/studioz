import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';

@Component({
    selector: 'app-screen2',
    templateUrl: './screen2.component.html',
    styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {
    previousUrl: string = '';
    constructor(public router: Router, public userservice: CartService) { }

    ngOnInit(): void {

    }
    previousPath() {
        console.log("previousUrl", this.previousUrl)
        this.userservice.previousUrl$
            .subscribe((previousUrl: string) => {
                this.previousUrl = previousUrl
            });
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
