import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quest41',
  templateUrl: './quest41.component.html',
  styleUrls: ['./quest41.component.css'],
})
export class Quest41Component {
  questionForm1: any;
  questionForm2: any;
  questionForm3: any;
  isCorrectAnswer: any;

  constructor(private formBuilder: FormBuilder) {
    this.questionForm1 = this.formBuilder.group({
      answer1: ['', Validators.required],
    });

    this.questionForm2 = this.formBuilder.group({
      answer2: ['', Validators.required],
    });

    this.questionForm3 = this.formBuilder.group({
      answer3: ['', Validators.required],
    });
  }

  submitForm() {
    if (
      this.questionForm1.value.answer1 ==
        'فرح صابر لأنه يستطيع أن يصوم رمضان ويأخذ أجر الصيام مثل والديه' &&
      this.questionForm2.value.answer2 == 'الشهادتين الصلاة الزكاة الحج ' &&
      this.questionForm3.value.answer3 == 'قرر صابر أن يتحمل العطش ويدرب نفسه على الصيام.'
    ) {
      this.isCorrectAnswer = true;
      alert('أحسنت');
    } else {
      this.isCorrectAnswer = false;
      alert('لم توفق');
    }
  }
}
