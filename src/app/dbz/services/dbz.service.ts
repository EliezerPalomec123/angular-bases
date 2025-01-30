import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 1000
  },
  {
    id: uuid(),
    name: "Goku",
    power: 10000
  },
  {
    id: uuid(),
    name: "Vegueta",
    power: 7500
  }
  ];

  onNewCharacter( character: Character ): void { 

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter( index: number ): void {
  //   this.characters.splice( index, 1 );
  // }

  deletecharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }
}