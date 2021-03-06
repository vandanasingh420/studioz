import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';

@Component({
    selector: 'app-screen5',
    templateUrl: './screen5.component.html',
    styleUrls: ['./screen5.component.css']
})
export class Screen5Component implements OnInit {
    RowData: any;
    constructor(public router: Router, private userService: CartService) {
        const params = this.router.getCurrentNavigation()?.extras.queryParams;
        if (params !== undefined) {
            this.RowData = params;
        }
    }
    ngOnInit(): void { }
    EditItem(event: any) {
        console.log("eventevent", event)
        this.router.navigate(['Screen4/Edit'], {
            queryParams: event
        });
    }
    DeleteItem(event: any) {
        console.log("event", event)
        this.userService.delete(event.id).subscribe(response => {
            this.router.navigate(['/Screen1'])
        })
    }
    redirect() {
        this.router.navigate(['Screen2']);
    }
}
