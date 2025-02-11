import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iContact } from '../../interfaces/contact';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private formSubmitUrl: string = environment.formSubmitUrl;

  private _http = inject(HttpClient);

  sendContactForm(data: iContact): Observable<string> {
    const body_req = {
      _subject: 'New submission!',
      _captcha: 'false',
      ...data,
    };

    // Tipando o retorno da requisição como Observable<string>
    return this._http.post<string>(this.formSubmitUrl, body_req, {
      responseType: 'text' as 'json',
    });
  }
}
