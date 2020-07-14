import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Config } from '../../config';
import { FeedItem } from '../../interfaces/feed-item';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent {
  @Input() item: FeedItem;
  @Output() public dispatchUpdate = new EventEmitter();
  @Output() public dispatchHide = new EventEmitter();
  dateFormat = Config.dateFormat;
  commentsMapping = Config.commentsMapping;
  pointsMapping = Config.pointsMapping;
  public isHidden: any = true;

  public hideDiv() {
    this.dispatchHide.emit({
      point: this.item,
    });
    this.isHidden = false;
  }
  public upVote() {
    this.dispatchUpdate.emit({
      point: this.item,
    });
    this.item.points++;
  }


}
