import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quest34',
  templateUrl: './quest34.component.html',
  styleUrls: ['./quest34.component.css'],
})
export class Quest34Component {
  questionForm: any;
  isCorrectAnswer: any;

  constructor(private formBuilder: FormBuilder) {
    this.questionForm = this.formBuilder.group({
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
    });
  }

  Submit() {
    if (
      this.questionForm.value.question1 ==
        ' أصبحت زينب تهمل الكتب لأنها أصبحت لديها حاسوب تجد فيه كل ما تحتاج إليه' &&
      this.questionForm.value.question2 ==
        'انفجر الحاسوب و لم يتمالك نفسه لأنها تضيع الوقت و تلعب ألعابا صاخبة و عنيفة' &&
      this.questionForm.value.question3 ==
        'نحتاج الحاسوب للقيام ببحث علمي أو أدبي أو ثقافي'
    ) {
      this.isCorrectAnswer = true;
      alert('أحسنت');
      // Vous pouvez ajouter ici d'autres traitements comme l'envoi des réponses à un serveur, etc.
    } else {
      this.isCorrectAnswer = false;
      alert('لم توفق');
    }
  }
}
