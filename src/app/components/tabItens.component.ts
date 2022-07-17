import { Component, EventEmitter, Inject, Input, OnInit, Output } from "@angular/core"
import { TabServices } from "../services/tab.services"

export interface TabItens{
  tabNames: string[]
  tabTexts: string[]
  currentTab: number
}

@Component({
    selector: 'app-tabitens',
    template:`
    <div>
        <button *ngFor="let tabName of tabService.tabListNames; let i = index"
            [ngClass]="{selected: i === currentTab}"
            (click)="onSelection.emit(i)">
            {{tabName}}
        </button>
    </div >
    <div class="text">
        <h2> {{tabService.tabListTexts[currentTab]}} </h2>
    </div>
    `,
    styles: [`
    .tab h2 {
  font-weight: normal;
  font-size: 20pt;
  margin-top: 0;
}

button {
  
  margin-left:10px;
  background-color: #ccc;
  border: 1px solid rgb(118, 118, 118);
  border-radius: 5px;
  padding: 2px 5px;
  font-size: 15pt;
  align-items: center;
}

.selected {
  font-weight: bold;
  background-color: #aaa;
}


.text{
  background-color: #ccc;
  font-weight: normal;
  font-size: 12pt;
  text-align: left;
  margin-top: 15px;
  margin-left: 15px;
  width:200pt;
  height: 100pt;
  border-radius: 10px;
  color:black
}
  `]
})
export class TabItensComponent implements OnInit{
    @Input() tabNames!: string[]
    @Input() tabTexts!: string[]
    @Input() currentTab!: number
    @Output() onSelection = new EventEmitter<number>()

    tabNamess:string[] =[]
    tabTextss:string[] =[]

    ngOnInit(): void {
        this.tabNamess = this.tabNames
        this.tabTextss = this.tabTexts
    }
    constructor(public tabService:TabServices){

    }
}