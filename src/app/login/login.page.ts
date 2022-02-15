import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { element } from 'protractor';
import { apiUrl } from '../constantes';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

//pour masquer le password
  showPassword = false;
  passwordToggleIcon = 'eye';

  email: any;
  password: any;

  constructor(private router: Router,
    private httpClient: HttpClient,
    public navCtrl: NavController,
    public alertCtrl: AlertController) { }

    //fonction pour masquer ou demasquer le password
    togglePassword(): void  {

      this.showPassword = !this.showPassword;
      
      if (this.passwordToggleIcon == 'eye') {
        this.passwordToggleIcon = 'eye-off';
      }else{
        this.passwordToggleIcon ='eye';
      }
    }

  connexion() {
    //pour recuperer l'adresse url jusqu'au fichier db.json
    const url = `${apiUrl}/users`;
    this.httpClient.get(url).subscribe((data: any) => {
      console.log(data);
      data.forEach(element => {

        if (element && ((element.email == this.email) && (element.password == this.password))) {
          this.router.navigate(['home']);
        } else {
          // this.flashProvider.show('ok',2000);
          console.log('erreur: de données ')
        }
      });
    })

  }


  goRegistration(): void {
    this.router.navigate(['/registration']);
  }

  ngOnInit() {
  }

}
