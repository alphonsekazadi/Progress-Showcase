import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonsModule,
    InputsModule,
    DropDownsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm: FormGroup;
  isSubmitting = false;
  
  subjects = [
    { text: 'General Inquiry', value: 'general' },
    { text: 'Technical Support', value: 'support' },
    { text: 'Sales Question', value: 'sales' },
    { text: 'Partnership', value: 'partnership' },
    { text: 'Bug Report', value: 'bug' }
  ];
  
  defaultSubject = { text: 'Select a subject...', value: null };
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      subject: [null, [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        alert('Thank you! Your message has been sent successfully.');
        this.resetForm();
        this.isSubmitting = false;
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
  
  resetForm() {
    this.contactForm.reset();
    this.contactForm.get('subject')?.setValue(null);
  }
}
