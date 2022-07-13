import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';


@Component({
    selector: 'app-screen4',
    templateUrl: './screen4.component.html',
    styleUrls: ['./screen4.component.css']
})
export class Screen4Component implements OnInit {
    // public addDetails: FormGroup;

    addDetails = new FormGroup({
        assembly: new FormControl(),
        Widthft: new FormControl(),
        Widthin: new FormControl(),
        Heigthft: new FormControl(),
        Heigthin: new FormControl(),
        Windcode: new FormControl(),
        Design: new FormControl(),
        Color: new FormControl(),
        glassType: new FormControl(),
        Sections: new FormControl(),
        Framing: new FormControl(),
        Spring: new FormControl(),
        Track: new FormControl(),
        Track_lift: new FormControl(),
        Track_mount: new FormControl(),
        Track_radius: new FormControl(),
        Packaging: new FormControl(),
        Configuration: new FormControl(),
        Lock: new FormControl(),
        misclock: new FormControl(),
        options: new FormGroup({
            checkbox_selected: new FormControl(),

            Strut: new FormControl(),
            Strap: new FormControl(),
            Quiet: new FormControl(),
            Astragal: new FormControl(),
            Gold: new FormControl(),
            Medallion: new FormControl(),
            Light: new FormControl(),
            Slide: new FormControl(),
            Spear: new FormControl(),

        })
        // Packaging:new FormControl(),
        // Packaging:new FormControl(),
        // Packaging:new FormControl(),
    })
    constructor(public fb: FormBuilder, public router: Router, private userService: CartService) {

    }
    progress = 20
    ngOnInit(): void {


    }
    onSubmit() {
        console.log(" this.addDetails", this.addDetails.value);
        this.userService.postData(this.addDetails.value)
            .subscribe(response => {
                console.log(response)
                this.router.navigate(['/Screen5'])
            })
    }

}
