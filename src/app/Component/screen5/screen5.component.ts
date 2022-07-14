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
            // this.RowData = this.RowData.data
        }
    }
    ngOnInit(): void {
    }
    Apicall(data: any) {
        console.log("data", data)
        // this.change.emit(this.RowData);
    }
    EditItem(event: any) {
        console.log("data", event)
        this.router.navigate(['/Screen4'], {
            state: { data: event }
        });

    }
    DeleteItem(event: any) {
        console.log("data", event)

    }
}
