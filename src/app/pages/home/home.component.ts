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
  left = 'left'
  right = 'right'
  topPoster = '../../assets/images/home-poster-3.jpg'
  bottomPoster = '../../assets/images/content-card-picture-3.jpg'
  leftCardTitle = 'Lorem Ipsum'
  leftCardText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium turpis sapien, ut eleifend arcu convallis sed. Mauris lectus diam, egestas sed vulputate vitae, condimentum eu lacus. Mauris a egestas mi, non vehicula eros. Quisque id quam non risus blandit viverra eu quis mauris. Nullam dapibus, justo ut sollicitudin laoreet, purus arcu ultrices quam, eget facilisis arcu lacus a ipsum. Mauris dapibus nisl ut risus hendrerit tempor. Sed quis dolor tincidunt, placerat metus vitae, mollis mi. Duis feugiat fermentum velit vel dapibus. Donec at gravida justo.'
  rightCardTitle = 'Lorem Ipsum'
  rightCardText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium turpis sapien, ut eleifend arcu convallis sed. Mauris lectus diam, egestas sed vulputate vitae, condimentum eu lacus. Mauris a egestas mi, non vehicula eros. Quisque id quam non risus blandit viverra eu quis mauris. Nullam dapibus, justo ut sollicitudin laoreet, purus arcu ultrices quam, eget facilisis arcu lacus a ipsum. Mauris dapibus nisl ut risus hendrerit tempor. Sed quis dolor tincidunt, placerat metus vitae, mollis mi. Duis feugiat fermentum velit vel dapibus. Donec at gravida justo.'
  leftCardImg = '../../assets/images/content-card-picture-1.jpg'
  rightCardImg = '../../assets/images/content-card-picture-2.jpg'
}
