import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public onNewcharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {

    console.log(this.character);

    if( this.character.name.length === 0 ) return;
    this.onNewcharacter.emit( { ...this.character } );

    this.character.name = '';
    this.character.power = 0;
  }
}
