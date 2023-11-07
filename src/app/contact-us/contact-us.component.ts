import { Component } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobile} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  faPhone  = faPhone
  faEnvelope  = faEnvelope
  faMobile =faMobile
  faMapMarkedAlt =faMapMarkedAlt
}
