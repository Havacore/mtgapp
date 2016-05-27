import { Component } from "@angular/core/src/metadata";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

import  { MdSidenav, MD_SIDENAV_DIRECTIVES } from "@angular2-material/sidenav";

@Component({
    selector: "dashboard-component",
    directives: [ MdSidenav, MD_SIDENAV_DIRECTIVES ],
    templateUrl: "templates/dashboard.component.html"
})
export class AppComponent implements OnInit {

    constructor() {}

    ngOnInit(): any {

    }
}