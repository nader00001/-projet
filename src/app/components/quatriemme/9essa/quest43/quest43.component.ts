import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quest43',
  templateUrl: './quest43.component.html',
  styleUrls: ['./quest43.component.css']
})
export class Quest43Component {
  questionForm1: any;
  questionForm2: any;

  constructor(private formBuilder: FormBuilder) {
    this.questionForm1 = this.formBuilder.group({
      reason: ['', Validators.required]
    });

    this.questionForm2 = this.formBuilder.group({
      opinion: ['', Validators.required],
      justification: ['']
    });
  }

  submitForm() {
    if (this.questionForm1.value.reason="لممارسة هواية الصيد" && this.questionForm2.valid) {
      alert('أحسنت');
    } else {

      alert('لم توفق');
    }
  }
}
