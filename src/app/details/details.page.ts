import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Structures } from 'src/models/interface-structure';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  structureDetails: Structures;
  image: any[];
  titre: any;
  description: any;
  city: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    }
  };
  category: any;
  availability: any;
  averageStart: any;
  constructor(public navCtrl: NavController,
    private route: ActivatedRoute,
    public router: Router) {
    this.route.queryParams.subscribe(params => {
      this.image = this.router.getCurrentNavigation().extras.queryParams.image;
      this.titre = this.router.getCurrentNavigation().extras.queryParams.titre;
      this.description = this.router.getCurrentNavigation().extras.queryParams.description;
      this.city = this.router.getCurrentNavigation().extras.queryParams.city;
      this.category = this.router.getCurrentNavigation().extras.queryParams.category;
      this.availability = this.router.getCurrentNavigation().extras.queryParams.availability;
      this.averageStart = this.router.getCurrentNavigation().extras.queryParams.averageStart
    })
    // this.structureDetails = this.navParams.get('data');
  }

  ionViewOldLoad() {
    console.log('ionViewOldLoad DetailsPage');
  }

  goBack(): void {
    this.navCtrl.pop();
  }

  goInscription(): void {
    this.router.navigate(['/form-inscription']);
  }

  ngOnInit() {
  }

}
