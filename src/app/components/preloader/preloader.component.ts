import { Component, Input } from '@angular/core';

@Component({
    selector: 'preloader',
    templateUrl: 'src/app/templates/preloader/preloader.component.html',
    styleUrls: ['src/app/templates/preloader/preloader.component.css']
})

export class Preloader {
    @Input() message: string = 'Loading...';
}