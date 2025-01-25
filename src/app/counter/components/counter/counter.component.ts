import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    standalone: false,
    template: `
        <h3>{{ counter }}</h3>

        <button (click)="increaseBy( 1 )">+1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="increaseBy( -1 )">-1</button>
    `
})

export class CounterComponent {
    constructor() { }

    public counter: number = 0;

    increaseBy( value: number ): void {
        this.counter += value;
    }

    reset() {
        this.counter = 0;
    }

}