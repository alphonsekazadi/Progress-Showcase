import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    ButtonsModule,
    LayoutModule,
    InputsModule,
    NavigationModule,
    ListViewModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Progress-Showcase');
  isHomePage = true;
  
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isHomePage = event.url === '/' || event.url === '';
    });
  }
  
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  
  features = [
    { id: 1, icon: '🤖', title: 'AI-Powered Generation', description: 'Transform natural language prompts into Angular components' },
    { id: 2, icon: '⚡', title: 'Rapid Development', description: 'Generate professional UI components in seconds' },
    { id: 3, icon: '🎨', title: 'Design System Ready', description: 'Built-in Progress Design System compliance' },
    { id: 4, icon: '📱', title: 'Responsive Design', description: 'Mobile-first responsive layouts automatically' },
    { id: 5, icon: '🔧', title: 'Kendo UI Integration', description: 'Seamless integration with Kendo UI components' },
    { id: 6, icon: '🚀', title: 'Production Ready', description: 'Enterprise-grade code quality and performance' }
  ];
  
  testimonials = [
    { id: 1, quote: 'Reduced our development time by 70%. Amazing AI capabilities!', author: 'Sarah Chen', role: 'Senior Developer' },
    { id: 2, quote: 'The generated components are production-ready and follow best practices.', author: 'Mike Rodriguez', role: 'Tech Lead' },
    { id: 3, quote: 'Perfect integration with our existing Angular workflow.', author: 'Emma Thompson', role: 'Frontend Architect' }
  ];
  
  faqs = [
    {
      question: 'What is Progress Agentic UI Generator?',
      answer: 'Progress Agentic UI Generator is an AI-powered tool that transforms natural language descriptions into professional Angular components using Kendo UI, following Progress Design System guidelines.'
    },
    {
      question: 'How does the AI component generation work?',
      answer: 'Simply describe what you want in plain English, and our AI will generate the corresponding Angular component code with proper Kendo UI integration, styling, and best practices.'
    },
    {
      question: 'What Kendo UI components are supported?',
      answer: 'We support all major Kendo UI for Angular components including Grid, Charts, Forms, Navigation, Layout components, and more. The AI automatically selects the most appropriate components for your needs.'
    },
    {
      question: 'Is the generated code production-ready?',
      answer: 'Yes! All generated code follows Angular and Kendo UI best practices, includes proper TypeScript typing, accessibility features, and is optimized for performance in production environments.'
    },
    {
      question: 'Can I customize the generated components?',
      answer: 'Absolutely! The generated code is fully customizable. You can modify styling, add business logic, integrate with your existing services, and extend functionality as needed.'
    },
    {
      question: 'What support is available?',
      answer: 'We offer comprehensive support including documentation, video tutorials, community forums, and dedicated technical support for Professional and Enterprise plans.'
    }
  ];
  
  pricingPlans = [
    {
      name: 'Starter',
      price: 29,
      featured: false,
      buttonText: 'Start Free Trial',
      features: [
        'Up to 5 components/month',
        'Basic Kendo UI components',
        'Email support',
        'Community access'
      ]
    },
    {
      name: 'Professional',
      price: 99,
      featured: true,
      buttonText: 'Get Started',
      features: [
        'Unlimited components',
        'All Kendo UI components',
        'Priority support',
        'Advanced templates',
        'Custom themes'
      ]
    },
    {
      name: 'Enterprise',
      price: 299,
      featured: false,
      buttonText: 'Contact Sales',
      features: [
        'Everything in Professional',
        'On-premise deployment',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ]
    }
  ];
  

}
