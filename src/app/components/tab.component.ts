import { Component, Input, OnInit, Output} from "@angular/core"

export interface Tab{
    tabsData: {tabName:string; tabText:string}[]
    currentTab: number
}

@Component({
    selector: "app-tab",
    template:`
    <app-tabitens
    [tabNames] = tabsNames
    [tabTexts] = tabsTexts
    [currentTab] = currentTab
    (onSelection)="select($event)"
    ></app-tabitens>
    `
})

export class TabComponent implements OnInit{
    @Input() tabsData!: { tabName: string; tabText: string; }[]
    currentTab: number = 0
    tabsDataa: {tabName:string; tabText:string}[] =[]
    tabsNames: string[] = []
    tabsTexts: string[] = []
    ngOnInit(): void {
          this.tabsNames = this.tabsData.map((tab) => tab.tabName)
          this.tabsTexts = this.tabsData.map((tab) => tab.tabText)
    }


    select(tabIndex: number){
        this.currentTab = tabIndex
    }
    
}