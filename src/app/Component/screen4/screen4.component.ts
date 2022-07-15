import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/cart.service';

@Component({
    selector: 'app-screen4',
    templateUrl: './screen4.component.html',
    styleUrls: ['./screen4.component.css']
})
export class Screen4Component implements OnInit {
    newprogessbar: number = 0;
    addDetails = new FormGroup({
        assembly: new FormControl('', [Validators.minLength(2), Validators.required]),
        Widthft: new FormControl('', [Validators.minLength(2)]),
        Widthin: new FormControl('', [Validators.minLength(2)]),
        Heigthft: new FormControl('', [Validators.minLength(2)]),
        Heigthin: new FormControl('', [Validators.minLength(2)]),
        Windcode: new FormControl(''),
        Design: new FormControl(''),
        Color: new FormControl(''),
        glassType: new FormControl('', [Validators.minLength(2), Validators.required]),
        Sections: new FormControl('', [Validators.minLength(2), Validators.required]),
        Framing: new FormControl('', [Validators.minLength(2), Validators.required]),
        Spring: new FormControl('', [Validators.minLength(2)]),
        Track: new FormControl('', [Validators.minLength(2)]),
        Track_lift: new FormControl(''),
        Track_mount: new FormControl(''),
        Track_radius: new FormControl(''),
        Packaging: new FormControl('', [Validators.minLength(2)]),
        Lock: new FormControl('', [Validators.minLength(2)]),
        misclock: new FormControl(''),
        options: new FormGroup({
            checkbox_selected: new FormControl([Validators.minLength(1)]),
            Strut: new FormControl(),
            Strap: new FormControl(),
            Quiet: new FormControl(),
            Astragal: new FormControl(),
            Gold: new FormControl(),
            Medallion: new FormControl(),
            Light: new FormControl(),
            Slide: new FormControl(),
            Spear: new FormControl(),
        }),
        Configuration: new FormControl(),

    })
    RowData: any;
    constructor(public fb: FormBuilder, public router: Router, private userService: CartService) {
        const params = this.router.getCurrentNavigation()?.extras.queryParams;
        if (params !== undefined) {
            this.RowData = params;
            console.log("step 4444", this.RowData)
        }
    }
    progress = 20
    ngOnInit(): void {
        if (this.RowData !== undefined) {
            this.addDetails.patchValue({
                assembly: this.RowData.assembly,
                Widthft: this.RowData.Widthft,
                Widthin: this.RowData.Widthin,
                Heigthft: this.RowData.Heigthft,
                Heigthin: this.RowData.Heigthin,
                Windcode: this.RowData.Windcode,
                Design: this.RowData.Design,
                Color: this.RowData.Color,
                glassType: this.RowData.glassType,
                Sections: this.RowData.Sections,
                Framing: this.RowData.Framing,
                Spring: this.RowData.Spring,
                Track: this.RowData.Track,
                Track_lift: this.RowData.Track_lift,
                Track_mount: this.RowData.Track_mount,
                Track_radius: this.RowData.Track_radius,
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
                })
            })
        }

    }
    ValueChanged(input: any) {
        if (this.addDetails.controls.assembly.value && this.addDetails.controls.Widthft.value && this.addDetails.controls.Widthin.value && this.addDetails.controls.Heigthft.value && this.addDetails.controls.Heigthin.value && this.addDetails.controls.Design.value && this.addDetails.controls.Color.value && this.addDetails.controls.Windcode.value) {
            this.newprogessbar = this.newprogessbar + 15;
        }
        else if (this.addDetails.controls.glassType.value) {
            this.newprogessbar = this.newprogessbar + 5;
        }
        else if (this.addDetails.controls.Spring.value && this.addDetails.controls.Track.value) {
            this.newprogessbar = this.newprogessbar + 15;
        } if (this.newprogessbar > 100) {
            this.newprogessbar = 100
        }
    }
    onSubmit() {
        if (this.addDetails.valid) {
            if (this.router.url == '/Screen4/Edit') {
                this.newprogessbar = 100;
                this.userService.update(this.RowData.id, this.addDetails.value)
                    .subscribe(response => {
                    })
                this.router.navigate(['/Screen5'], {
                    state: { data: this.addDetails.value }
                });
            }
            else {
                this.newprogessbar = 100;
                this.userService.postData(this.addDetails.value,)
                    .subscribe(response => {
                        this.router.navigate(['/Screen5'], {
                            queryParams: this.addDetails.value
                        });
                    })
            }
        }
    }
}
