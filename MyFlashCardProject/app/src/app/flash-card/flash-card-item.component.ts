import { Component, Input, OnInit } from '@angular/core';
import { FlashCard } from './flash-card.model';


@Component({
  selector: 'flash-card-item',
  templateUrl: './flash-card-item.component.html',

})
export class FlashCardItemComponent implements OnInit
{
  ngOnInit(): void
  {
    
   
  }
  @Input() FlashCards: FlashCard[];
  @Input() FlashCard: FlashCard;
  public width = '100%';
  public height = '610px';
}
