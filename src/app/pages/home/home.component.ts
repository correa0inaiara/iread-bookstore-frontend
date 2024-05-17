import { Component } from '@angular/core';
import { PosterComponent } from '../../components/poster/poster.component';
import { ContentCardComponent } from '../../components/content-card/content-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PosterComponent, ContentCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /* Posters */
  topPoster = '../../assets/images/home-poster-3.jpg'
  topAltText = 'Poster of a hand holding books'
  bottomPoster = '../../assets/images/content-card-picture-3.jpg'
  bottomAltText = 'Poster of a table of aligned books with a bookshelf at the background'

  /* Image on the Left and Content on the Right */
  left = 'left'
  leftCardImg = '../../assets/images/content-card-picture-1.jpg'
  leftCardText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium turpis sapien, ut eleifend arcu convallis sed. Mauris lectus diam, egestas sed vulputate vitae, condimentum eu lacus. Mauris a egestas mi, non vehicula eros. Quisque id quam non risus blandit viverra eu quis mauris. Nullam dapibus, justo ut sollicitudin laoreet, purus arcu ultrices quam, eget facilisis arcu lacus a ipsum. Mauris dapibus nisl ut risus hendrerit tempor. Sed quis dolor tincidunt, placerat metus vitae, mollis mi. Duis feugiat fermentum velit vel dapibus. Donec at gravida justo.'
  leftCardTitle = 'Lorem Ipsum'

  /* Image on the Right and Content on the Left */
  right = 'right'
  rightCardImg = '../../assets/images/content-card-picture-2.jpg'
  rightCardText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium turpis sapien, ut eleifend arcu convallis sed. Mauris lectus diam, egestas sed vulputate vitae, condimentum eu lacus. Mauris a egestas mi, non vehicula eros. Quisque id quam non risus blandit viverra eu quis mauris. Nullam dapibus, justo ut sollicitudin laoreet, purus arcu ultrices quam, eget facilisis arcu lacus a ipsum. Mauris dapibus nisl ut risus hendrerit tempor. Sed quis dolor tincidunt, placerat metus vitae, mollis mi. Duis feugiat fermentum velit vel dapibus. Donec at gravida justo.'
  rightCardTitle = 'Lorem Ipsum'
}
