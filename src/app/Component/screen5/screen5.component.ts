import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
        const params = this.router.getCurrentNavigation()?.extras.state;
        console.log('params => ', params);
        if (params !== undefined) {
            this.RowData = params['data'];
            console.log("this.RowData", this.RowData)
        }
    }
    ngOnInit(): void {
        // let data: any = localStorage.getItem('values');
        // this.RowData = JSON.parse(data)
    }
    EditItem(event: any) {
        console.log("eventeventeventeventevent", event)
        this.router.navigate(['Screen4/Edit'], {
            state: { data: event }
        });
    }
    DeleteItem(event: any) {
        this.userService.delete(event.id).subscribe(response => {
            // console.log(response)
            this.router.navigate(['/Screen1'])
        })
    }
}
