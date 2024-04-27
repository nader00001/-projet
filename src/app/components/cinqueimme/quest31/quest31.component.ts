import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quest31',
  templateUrl: './quest31.component.html',
  styleUrls: ['./quest31.component.css']
})
export class Quest31Component {
  monFormulaire: any;
  isCorrectAnswer: any;
  itsOkay : any ;

  constructor(private formBuilder: FormBuilder) {
    this.monFormulaire = this.formBuilder.group({
      reponse7: [''],
      reponse8: ['']
    });
  }

  onSubmit() {
    const reponse7Value = this.monFormulaire.value.reponse7;
    const reponse8Value = this.monFormulaire.value.reponse8;
    if(reponse7Value == "انغرست في جسمها شوكة أوجعتها كثيرا" && reponse8Value=="response8"){
      alert('أحسنت');
      this.isCorrectAnswer = true;
      this.itsOkay = true ;
    }else {
      this.isCorrectAnswer = false;
      this.itsOkay = true ;
      alert('لم توفق');
    }

    console.log('Réponse 1:', reponse7Value);
    console.log('Réponse 2:', reponse8Value);

  }

}
