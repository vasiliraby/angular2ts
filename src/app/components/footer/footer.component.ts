import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: '[app-footer]',
    templateUrl: 'src/app/templates/footer/footer.component.html',
    styleUrls: ['src/app/templates/footer/footer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppFooter { }