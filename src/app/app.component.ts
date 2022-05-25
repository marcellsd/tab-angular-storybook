import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-tab
  [tabsData]=tabsData
    ></app-tab>`
})

export class AppComponent {
  title = 'tab-angular';
  tabsData = [{
    tabName: 'Tb 1',
    tabText: 'Texto do primeiro tab'
  },
  {
    tabName: 'Tb 2',
    tabText: 'Texto do segundo tab'
  },
  {
    tabName: 'Tb 3',
    tabText: 'Texto do terceiro tab'
  },
  {
    tabName: 'Tb 4',
    tabText: 'Texto do quarto tab'
  }]
}
