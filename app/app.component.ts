import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGrid, DxButton } from 'devextreme-angular2';

import { Hero } from './hero';
import { HeroService } from './hero.service';

declare var DevExpress: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent implements OnInit {
    store: any;
    dataSource : any;
    source : any;

    constructor(private heroService: HeroService) { }

    @ViewChild('grdMain') dataGrid: DxDataGrid
    refresh() {
        this.dataGrid.instance.refresh();
    }

    getHeroes() {
        this.heroService.getHeroes().then(data => { this.source = data; });
    }

    ngOnInit() {
        this.store = new DevExpress.data.CustomStore({
            requireTotalCount: true,
            load: (loadOptions: any) => {
                console.log('loading...');
                this.getHeroes();
                console.log(this.source);
                if (this.source) return this.source;
                else return undefined;
            },
            byKey: function (key: any): any {
                return { id: key };
            },
            totalCount: (loadOptions: any) => {
                if (this.source) return this.source.length;
                else return 0; 
            },
            key: 'ECO_ID'
        })

        this.dataSource = new DevExpress.data.DataSource({
            store: this.store
        });
    }
}