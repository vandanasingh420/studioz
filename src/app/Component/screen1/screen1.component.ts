import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../Service/cart.service';


@Component({
    selector: 'app-screen1',
    templateUrl: './screen1.component.html',
    styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {
    GridData: any;
    searchText = '';
    rowData: any;
    constructor(public router: Router, private userService: CartService) { }
    tabs = [
        { title: 'CARTS', content: 'First', active: true },
        { title: 'FAVORITES', content: 'Second' }
    ];
    subtabs = [
        { title: 'Active Carts', content: 'Third' },
        { title: 'Archived Carts', content: 'fouth' }
    ];
    ngOnInit() {

        this.userService.getAllData()
            .subscribe(data => {
                this.GridData = data
            })
    }

    redirect() {
        this.router.navigate(['/Screen2'])
    }

    rowClicked(item: any) {
        this.rowData = item;
        this.router.navigate(['/Screen5'], {
            queryParams: item
        });
    }
}
