import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: '[app-footer]',
    templateUrl: 'src/app/components/footer/footer.component.html',
    styleUrls: ['src/app/components/footer/footer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppFooter {
    year: number = new Date().getFullYear();
}