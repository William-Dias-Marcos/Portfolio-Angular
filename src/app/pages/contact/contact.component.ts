import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private _contactService = inject(ContactService);
  private _formBuilder = inject(NonNullableFormBuilder);

  protected contactForm = this._formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    message: ['', [Validators.required]],
  });

  public onSubmit(): void {
    const formData = {
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };

    this._contactService.sendContactForm(formData).subscribe({
      complete: () => {
        this.contactForm.reset();
      },
    });
  }
}
