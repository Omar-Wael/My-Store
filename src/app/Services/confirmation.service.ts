import { Injectable } from '@angular/core';
import { confirm } from '../models/Confirmation';
@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  confirm: confirm[] = [];
  constructor() {}
  getConfirmation() {
    return this.confirm;
  }
  addToConfirmation(parameters: any) {
    this.confirm.push(parameters);
    return this.confirm;
  }
}
