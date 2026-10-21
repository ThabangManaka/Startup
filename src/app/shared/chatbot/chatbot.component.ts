
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  text: string;
  sender: 'bot' | 'user';
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnDestroy {
  message = '';
  isOpen = false;
  isTyping = false;

  messages: ChatMessage[] = [
    {
      sender: 'bot',
      text: "Hello! Welcome to Startup. I'm your AI assistant. How can I help you today?"
    }
  ];

  quickQuestions = [
    'What services do you offer?',
    'Can you build an AI solution?',
    'How can I contact Startup?'
  ];

  private typingTimer?: ReturnType<typeof setTimeout>;

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  sendMessage(text: string = this.message): void {
    const userMessage = text.trim();

    if (!userMessage || this.isTyping) {
      return;
    }

    this.messages.push({
      sender: 'user',
      text: userMessage
    });

    this.message = '';
    this.isTyping = true;

    const response = this.getBotResponse(userMessage);

    this.typingTimer = setTimeout(() => {
      this.messages.push({
        sender: 'bot',
        text: response
      });

      this.isTyping = false;
      this.typingTimer = undefined;
    }, 500);
  }

  askQuestion(question: string): void {
    this.sendMessage(question);
  }

  private getBotResponse(message: string): string {
    const question = message.toLowerCase();

    if (question.includes('service') || question.includes('offer')) {
      return 'Startup offers software development, web and mobile applications, business intelligence, database solutions, IT consulting and AI solutions.';
    }

    if (question.includes('ai') || question.includes('artificial intelligence')) {
      return 'Startup can help businesses explore AI solutions, automation and intelligent software tailored to their needs. Contact us to discuss your project.';
    }

    if (
      question.includes('contact') ||
      question.includes('email') ||
      question.includes('phone')
    ) {
      return 'You can reach Startup at thabang@gmail.com or call +27 79 968 5263. You can also use the Contact Us form on our website.';
    }

    if (
      question.includes('price') ||
      question.includes('cost') ||
      question.includes('quote')
    ) {
      return 'Project costs depend on your requirements. Contact Startup with your project details to discuss a suitable solution.';
    }

    return "Thanks for your question! I can help with Startup's services, AI solutions, pricing enquiries and contact details. For other questions, please contact our team.";
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }
}
