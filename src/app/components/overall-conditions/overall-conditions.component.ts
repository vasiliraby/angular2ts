import { Component, Input } from '@angular/core';

@Component({
    selector: 'overall-conditions',
    templateUrl: 'src/app/components/overall-conditions/overall-conditions.component.html',
    styleUrls: ['src/app/components/overall-conditions/overall-conditions.component.css'],
})

export class OverallConditionsComponent {
    @Input() description: string;
    @Input() icon: string;
}