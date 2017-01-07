import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: '[app-header]',
    templateUrl: 'src/app/components/header/header.component.html',
    styleUrls: ['src/app/components/header/header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppHeader { }