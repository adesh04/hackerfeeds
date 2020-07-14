import { Component, Input } from '@angular/core';

import { Config } from '../../config';
import { FeedItem } from '../../interfaces/feed-item';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent {
  @Input() item: FeedItem;
  dateFormat = Config.dateFormat;
  commentsMapping = Config.commentsMapping;
  pointsMapping = Config.pointsMapping;
  public isHidden: any = true;

  public hideDiv() {
    this.isHidden = false;
  }
  public upVote() {
    this.item.points++;
  }
}
