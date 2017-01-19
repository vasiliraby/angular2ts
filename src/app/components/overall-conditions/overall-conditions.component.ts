import { Component, Input } from '@angular/core';

import { IOverallData }     from './overall-data.interface';

@Component({
    selector: 'overall-conditions',
    templateUrl: 'src/app/components/overall-conditions/overall-conditions.component.html',
    styleUrls: ['src/app/components/overall-conditions/overall-conditions.component.css'],
})

export class OverallConditions {
    @Input() overallData: IOverallData;
}