import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: '[app-header]',
    templateUrl: 'src/app/templates/header/header.component.html',
    styleUrls: ['src/app/templates/header/header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppHeader { }