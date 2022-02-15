import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Structures } from 'src/models/interface-structure';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.page.html',
  styleUrls: ['./form-inscription.page.scss'],
})
export class FormInscriptionPage implements OnInit {

  nom: any;
  prenom: any;
  dateNaissance: any;
  lieuNaissance: any;
  genre: any;
  Telephone: any;
  email: any;

  constructor(
    private route: ActivatedRoute,
    public navCtrl: NavController,
    public router: Router,
    private mesServices: ServicesService) { }

  async boutonInscription() {


      let infosApprenant = {
        nom: this.nom,
        prenom: this.prenom,
        dateNaissance: this.dateNaissance,
        lieuNaissance: this.lieuNaissance,
        genre: this.genre,
        Telephone: this.Telephone,
        email: this.email
      }
      this.mesServices.createApprenant(infosApprenant).subscribe(data => {
        if (data) {
          this.navCtrl.pop();
          //console.log('succes: ' + JSON.stringify(data))
        } else {
          console.log('erreur: ' + data)
        }
      })
    }

   goBack(): void{
    this.navCtrl.pop();
  }

  ngOnInit() {
  }

}
