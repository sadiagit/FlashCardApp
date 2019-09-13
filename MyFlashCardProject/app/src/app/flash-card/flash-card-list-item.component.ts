import { Component, Input, OnInit } from '@angular/core';
import { FlashCard } from './flash-card.model';



@Component({
  selector: 'flash-card-list-item',
  templateUrl: './flash-card-list-item.component.html',

})
export class FlashCardListItemComponent implements OnInit
{
  ngOnInit(): void
  {
    this.FlashCard.trimmedAnswer = this.FlashCard.answer.substring(0, 20) + '...'
  }
  @Input() FlashCard: FlashCard;
}
