import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'preloader',
    templateUrl: 'src/app/components/preloader/preloader.component.html',
    styleUrls: ['src/app/components/preloader/preloader.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Preloader {
    @Input() message: string = 'Loading...';
}