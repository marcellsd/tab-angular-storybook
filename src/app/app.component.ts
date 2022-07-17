import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-tab-form></app-tab-form>
  <app-tab
  ></app-tab>
  `
})

export class AppComponent {
  title = 'tab-angular';
}
