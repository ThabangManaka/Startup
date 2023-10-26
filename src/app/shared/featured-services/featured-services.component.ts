import { Component } from '@angular/core';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple} from '@fortawesome/free-solid-svg-icons';
import { faCalendarMinus} from '@fortawesome/free-solid-svg-icons';
import { faComments} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'featured-services',
  templateUrl: './featured-services.component.html',
  styleUrls: ['./featured-services.component.scss']
})
export class FeaturedServicesComponent {
  faPeopleRoof =faPeopleRoof
  faHandshakeSimple =faHandshakeSimple
  faCalendarMinus = faCalendarMinus
  faComments = faComments
}
