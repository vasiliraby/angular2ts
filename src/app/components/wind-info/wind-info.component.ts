import { Component, Input } from '@angular/core';

import { IWindData }        from './wind-data.interface';

@Component({
    selector: 'wind-info',
    templateUrl: 'src/app/components/wind-info/wind-info.component.html',
    styleUrls: ['src/app/components/wind-info/wind-info.component.css'],
})

export class WindInfo {
    @Input() windData: IWindData;
}