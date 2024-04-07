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
        this.questionForm.get('question1.colors1').value == 'colors1' &&
        this.questionForm.get('question1.colors2').value == '' &&
        this.questionForm.get('question1.colors3').value == '' &&
        this.questionForm.get('question2.meal2').value == 'meal2' &&
        this.questionForm.get('question2.meal1').value == '' &&
        this.questionForm.get('question2.meal3').value == ''
        // this.questionForm.get('question3.dream').value == 'فلسطين'
      ) {
        alert('أحسنت');
        this.showBravoAnimation();
        this.playAudio(true);
        // Recharger la page après 2 secondes
        setTimeout(() => {
          window.location.reload();
        }, 6000);
      } else {
        alert('لم توفق');
        this.playAudio(false);
        setTimeout(() => {
          window.location.reload();
        }, 6000);
      }
    } else {
      console.log('Form invalid');
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

  playAudio(correct: boolean) {
    const audio1 = document.getElementById('audio1') as HTMLAudioElement;
    const audio2 = document.getElementById('audio2') as HTMLAudioElement;
    if (correct) {
      audio2.load();
      audio2.play();
    } else {
      audio1.load();
      audio1.play();
    }
  }
}
