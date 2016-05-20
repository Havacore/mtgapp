import {Component} from "@angular/core/src/metadata";
import {OnInit} from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: "my-app",
    template: `<h1>It's Finally working!!!</h1>`
})
export class AppComponent implements OnInit {

    constructor() {}

    ngOnInit(): any {

    }
}