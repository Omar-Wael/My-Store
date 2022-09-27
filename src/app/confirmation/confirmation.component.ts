import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from '../Services/confirmation.service';
import { confirm } from '../models/Confirmation';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) {}
  confirm: confirm[] = [];

  ngOnInit(): void {
    this.confirm = this.confirmationService.getConfirmation();
    console.log(confirm);
  }
}
