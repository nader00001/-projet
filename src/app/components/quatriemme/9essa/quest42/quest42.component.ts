import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quest42',
  templateUrl: './quest42.component.html',
  styleUrls: ['./quest42.component.css'],
})
export class Quest42Component implements OnInit {
  questionForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question1: this.fb.group({
        colors1: [''],
        colors2: [''],
        colors3: [''],
      }),
      question2: this.fb.group({
        meal1: [''],
        meal2: [''],
        meal3: [''],
      }),
      question3: this.fb.group({
        dream: [''],
      }),
    });
  }

  onSubmit() {
    if (this.questionForm.valid) {
      if (
        this.questionForm.get('question1.colors1').value.length !== 0 &&
        this.questionForm.get('question2.meal2').value.length !== 0 &&
        this.questionForm.get('question3.dream').value === 'فلسطين'
      ) {
        alert('أحسنت');
        this.showBravoAnimation();
      } else {
        alert('لم توفق');
      }
    } else {

      console.log(
        this.questionForm.get('question1.colors1').value.length,
        this.questionForm.get('question2.meal2').value.length,
        this.questionForm.get('question3.dream').value
      );
    }
  }

  showBravoAnimation() {
    const bravoElement = document.getElementById('bravoAnimation');
    if (bravoElement) {
      bravoElement.classList.remove('d-none');
      setTimeout(() => {
        bravoElement.classList.add('d-none');
      }, 1500); // Durée de l'animation
    }
  }
}
