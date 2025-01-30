import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  // Aquí se hace la inyección de dependencia
  constructor( private dbzService: DbzService ) {
  
  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void {
    this.dbzService.deletecharacterById( id );
  }

  onNewCharacter( character: Character ): void {
    this.dbzService.onNewCharacter( character );
  }
}