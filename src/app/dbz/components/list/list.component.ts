import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  // Puede recibir el nombre de la propiedad que queremos enviar en los parentesis
  @Input()
  public characterList: Character[] = []

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter( id?: string ): void {

    if( !id ) return;
    // TODO: Emitir el id del personaje
    console.log( { id } );
    // Se emite el índice del elemento a eliminar
    this.onDeleteCharacter.emit( id );
  }
}
