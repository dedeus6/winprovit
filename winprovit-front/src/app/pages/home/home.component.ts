import { Component, OnInit } from "@angular/core";
import { AlticciService } from "src/app/services/alticci.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
export class HomePageComponent implements OnInit {

  alticciForm: FormGroup;
  sequenceNumber: number | undefined;

  constructor(
    private alticciService: AlticciService, 
    private fb: FormBuilder
  ) {
    this.alticciForm = this.fb.group({
      sequenceNumber: [0, [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
  }

  ngOnInit(): void {
  }

  getSequenceNumber() {
    this.alticciService.getEvents(this.alticciForm.get('sequenceNumber')?.value).subscribe(response => {
      this.sequenceNumber = response;
    })
  }

}