import { Component } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

  faPhone = faPhone;
}
