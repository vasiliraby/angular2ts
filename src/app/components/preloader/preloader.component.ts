import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'preloader',
    templateUrl: 'src/app/templates/preloader/preloader.component.html',
    styleUrls: ['src/app/templates/preloader/preloader.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Preloader {
    @Input() message: string = 'Loading...';
}