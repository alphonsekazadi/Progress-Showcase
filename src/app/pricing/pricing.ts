import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule, ButtonsModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
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
