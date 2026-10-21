import { Component,OnDestroy  } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobile} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent  implements OnDestroy { 
  faPhone  = faPhone
  faEnvelope  = faEnvelope
  faMobile =faMobile
  faMapMarkedAlt =faMapMarkedAlt

    isSpeaking = false;

  private readonly welcomeMessage =
    "Hello and welcome to Startup! I'm your AI assistant. " +
    "I can tell you about our software development, business intelligence, " +
    "and AI solutions. How can I help you today?";

  speakWelcome(): void {
    if (!('speechSynthesis' in window)) {
      alert('Sorry, your browser does not support speech synthesis.');
      return;
    }

    const speech = window.speechSynthesis;

    // Clicking again stops the current greeting.
    if (speech.speaking) {
      speech.cancel();
      this.isSpeaking = false;
      return;
    }

    const message = new SpeechSynthesisUtterance(
      this.welcomeMessage
    );

    message.lang = 'en-ZA';
    message.rate = 0.95;
    message.pitch = 1.05;
    message.volume = 1;

    message.onstart = () => {
      this.isSpeaking = true;
    };

    message.onend = () => {
      this.isSpeaking = false;
    };

    message.onerror = () => {
      this.isSpeaking = false;
    };

    speech.cancel();
    speech.speak(message);
  }

  ngOnDestroy(): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

