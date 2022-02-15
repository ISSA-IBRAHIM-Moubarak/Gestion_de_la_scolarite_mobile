import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  nomUtilisateur: any;
  prenomUtilisateur: any;
  dateNaissance: any;
  civilite: any;
  telephone: any;
  email: any;
  password: any;
  confirmPassword: any;
  constructor(public navCtrl: NavController,
    public router: Router,
    private mesServices: ServicesService) {

  }

  boutonCreerCompte() {
    /* console.log([this.nomUtilisateur,
     this.prenomUtilisateur,
     this.dateNaissance,
     this.civilite,
     this.telephone,
     this.email,
     this.password,
     this.confirmPassword]);*/

    let infosUser = {
      nomUtilisateur: this.nomUtilisateur,
      prenomUtilisateur: this.prenomUtilisateur,
      dateNaissance: this.dateNaissance,
      civilite: this.civilite,
      telephone: this.telephone,
      email: this.email,
      password: this.password
    }
    this.mesServices.createUser(infosUser).subscribe(data => {
      if (data) {
        this.navCtrl.pop();
        //console.log('succes: ' + JSON.stringify(data))
      } else {
        console.log('erreur: ' + data)
      }
    })
  }

  ngOnInit() {
  }

}
