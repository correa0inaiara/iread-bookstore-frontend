import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {

  @Input('imgSrc') imgSrc = '';
  @Input('direction') direction = 'left';
  @Input('title') title = '';
  @Input('text') text = '';

  constructor() {
    console.log('content card constructor');
  }

  ngOnInit() {
    console.log('content card ng on init');
  }
}
