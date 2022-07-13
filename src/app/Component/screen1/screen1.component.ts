import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from '../../Service/cart.service';


@Component({
    selector: 'app-screen1',
    templateUrl: './screen1.component.html',
    styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {
    GridData: any;
    searchText = '';
    constructor(public router: Router, private userService: CartService) { }
    tabs = [
        { title: 'CARTs', content: 'First', active: true },
        { title: 'FAVORITEs', content: 'Second' }
    ];
    subtabs = [
        { title: 'Active Carts', content: 'Third' },
        { title: 'Archived Carts', content: 'fouth' }
    ];
    ngOnInit() {

        this.userService.getAllData()
            .subscribe(data => {
                console.log(data)
                this.GridData = data

            })
        // this.submitData()

    }

    redirect() {
        this.router.navigate(['/Screen2'])
    }

}
