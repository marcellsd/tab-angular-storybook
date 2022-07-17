import { Component, Input, OnInit, Output} from "@angular/core"
import { TabServices } from "../services/tab.services";

export interface Tab{
    tabsData: {tabName:string; tabText:string}[]
    currentTab: number
}

@Component({
    selector: "app-tab",
    template:`
    <app-tabitens
    [tabNames] = tabService.tabListNames
    [tabTexts] = tabService.tabListTexts
    [currentTab] = currentTab
    (onSelection)="select($event)"
    ></app-tabitens>
    `
})

export class TabComponent{
    currentTab: number = 0
    tabsDataa: {tabName:string; tabText:string}[] =[]
    constructor (public tabService: TabServices){

    }

    select(tabIndex: number){
        this.currentTab = tabIndex
    }
    
}