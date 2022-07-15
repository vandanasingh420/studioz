import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Service/cart.service';

@Component({
    selector: 'app-screen4',
    templateUrl: './screen4.component.html',
    styleUrls: ['./screen4.component.css']
})
export class Screen4Component implements OnInit {
    // public addDetails: FormGroup;
    newprogessbar: number = 0;
    addDetails = new FormGroup({
        // step1: new FormGroup({
        assembly: new FormControl(),
        Widthft: new FormControl(),
        Widthin: new FormControl(),
        Heigthft: new FormControl(),
        Heigthin: new FormControl(),
        Windcode: new FormControl(),
        Design: new FormControl(),
        Color: new FormControl(),
        // }),
        // step2: new FormGroup({
        glassType: new FormControl(),
        Sections: new FormControl(),
        Framing: new FormControl(),
        // }),
        // step3: new FormGroup({
        Spring: new FormControl(),
        Track: new FormControl(),
        Track_lift: new FormControl(),
        Track_mount: new FormControl(),
        Track_radius: new FormControl(),
        // }),
        // step4: new FormGroup({
        Packaging: new FormControl(),
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
            // })
        }),
        Configuration: new FormControl(),

    })
    RowData: any;
    constructor(public fb: FormBuilder, public router: Router, private userService: CartService) {
        const params = this.router.getCurrentNavigation()?.extras.state;
        console.log('params => ', params);
        if (params !== undefined) {
            this.RowData = params['data'];
            console.log("this.RowData", this.RowData)
        }
    }
    progress = 20
    ngOnInit(): void {
        if (this.RowData !== undefined) {
            console.log("RowData", this.RowData)
            this.addDetails.patchValue({
                // step1: ({
                assembly: this.RowData.assembly,
                Widthft: this.RowData.Widthft,
                Widthin: this.RowData.Widthin,
                Heigthft: this.RowData.Heigthft,
                Heigthin: this.RowData.Heigthin,
                Windcode: this.RowData.Windcode,
                Design: this.RowData.Design,
                Color: this.RowData.Color,
                // }),
                // step2: ({
                glassType: this.RowData.glassType,
                Sections: this.RowData.Sections,
                Framing: this.RowData.Framing,
                // }),
                // step3: ({
                Spring: this.RowData.Spring,
                Track: this.RowData.Track,
                Track_lift: this.RowData.Track_lift,
                Track_mount: this.RowData.Track_mount,
                Track_radius: this.RowData.Track_radius,
                // }),
                // step4: ({
                Packaging: this.RowData.Packaging,
                Configuration: this.RowData.Configuration,
                Lock: this.RowData.Lock,
                misclock: this.RowData.misclock,
                options: ({
                    checkbox_selected: this.RowData.options.checkbox_selected,
                    Strut: this.RowData.options.Strut,
                    Strap: this.RowData.options.Strap,
                    Quiet: this.RowData.options.Quiet,
                    Astragal: this.RowData.options.Astragal,
                    Gold: this.RowData.options.Gold,
                    Medallion: this.RowData.options.Medallion,
                    Light: this.RowData.options.Light,
                    Slide: this.RowData.options.Slide,
                    Spear: this.RowData.options.Spear,

                    // })

                })
            })
        }

    }
    ValueChanged(input: any) {
        console.log("input", input.value);
        console.log("this.addDetails.controls.assembly.value ", this.addDetails.controls.assembly.value);

        // for (let i in this.addDetails.controls.step1.value) {
        //     if (this.addDetails.controls.step1.value[i] == null) {
        //         console.log("this.addDetails.controls.step1.valid", this.addDetails.controls.step1.valid, this.addDetails.controls.step1.value)
        //         this.newprogessbar = 25;
        //     }
        //     // this.addDetails.controls.step1.value[i];
        // }
        if (this.addDetails.controls.assembly.dirty && this.addDetails.controls.Widthft.dirty && this.addDetails.controls.Widthin.dirty && this.addDetails.controls.Heigthft.dirty && this.addDetails.controls.Heigthin.dirty && this.addDetails.controls.Design.dirty && this.addDetails.controls.Color.dirty && this.addDetails.controls.Windcode.dirty) {
            console.log("assembly.value ", this.addDetails.controls.assembly.value);
            this.newprogessbar = 25;
        }
        else {
            console.log("this.addDetails ,123")
        }
    }
    onSubmit() {
        if (this.router.url == '/Screen4/Edit') {
            console.log("this.row idddddd", this.RowData.id)
            this.userService.update(this.RowData.id, this.addDetails.value)
                .subscribe(response => {
                    // localStorage.setItem('values', JSON.stringify(this.addDetails.value))
                    console.log("response", response);
                })
            this.router.navigate(['/Screen5'], {
                state: { data: this.addDetails.value }
            });
        }
        else {
            this.userService.postData(this.addDetails.value,)
                .subscribe(response => {
                    console.log(response);
                    // localStorage.setItem('values', JSON.stringify(this.addDetails.value))

                    this.router.navigate(['/Screen5'], {
                        state: { data: this.addDetails.value }
                    });
                })
        }
    }
}
