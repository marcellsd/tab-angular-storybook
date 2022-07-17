import { Component, Input, Output, EventEmitter, ViewChild } from "@angular/core";
import { TabServices } from "../services/tab.services";


@Component({
    selector: 'app-tab-form',
    template: `
        <form #tabForm="ngForm" (ngSubmit)="tabForm.valid && submit()">
            
            <div>
                <label>Número de tabs</label>
                <input type="number"
                name="length"
                #numTab="ngModel"
                [(ngModel)] = "tabNames.length"
                min="1" max="10"
                />
            </div>
            <div>
                <div *ngFor="let tab of tabNames; index as i; trackBy: trackByFn">
                    <div>
                        <label>Título Tab {{i+1}}</label>
                        <input 
                            #name="ngModel" 
                            [(ngModel)]= "tabNames[i]" 
                            name="tabname-{{i}}" 
                            required/>
                        <div *ngIf="name.touched && name.errors" class="errors">
                            <div *ngIf="name.errors['required']">
                                Este campo é necessário
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <label>Texto {{i+1}}</label>
                        <input 
                            #text="ngModel" 
                            [(ngModel)]= "tabTexts[i]" 
                            name="tabtext-{{i}}" 
                            required/>
                        <div *ngIf="text.touched && text.errors" class="errors">
                            <div *ngIf="text.errors['required']">
                                Este campo é necessário
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
             <input type="submit" value="Enviar"/>
            </div>
            
        </form>
        
    `,
    styles:[`
    .errors{
        color:red
    }
    `]
})

export class TabFormComponent{
    tabNames: string[] = ['']
    tabTexts: string[] = ['']
    @Output() onSubmit = new EventEmitter()


    constructor(public tabService: TabServices){}

    submit() {
        this.onSubmit.emit({
           tabListNames: [...this.tabNames],
           tabListTexts: [...this.tabTexts] 
        })
      this.tabService.tabListNames = [...this.tabNames]
      this.tabService.tabListTexts = [...this.tabTexts]
      this.tabNames= []
      this.tabTexts= []
      
    }

    trackByFn(index: number) {
        return index;  
    }
}