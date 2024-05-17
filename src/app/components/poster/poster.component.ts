import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poster',
  standalone: true,
  imports: [],
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.scss'
})
export class PosterComponent {
  @Input('imgSrc') imgSrc = '';
  @Input('altText') altText = '';
  
}
