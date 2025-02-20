import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ContactService } from '../../services/contact/contact.service';
import { CommonModule } from '@angular/common';
import { finalize, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  public showMessage: boolean = false;
  public loading: boolean = false;

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

    this.loading = true;
    this.showMessage = false;

    this._contactService
      .sendContactForm(formData)
      .pipe(
        finalize(() => (this.loading = false)),
        switchMap(() => {
          this.showMessage = true;
          this.contactForm.reset();
          return timer(2000);
        })
      )
      .subscribe(() => (this.showMessage = false));
  }
}
