import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, NavController } from '@ionic/angular';
import { Structures } from 'src/models/interface-structure';
import { DetailsPage } from '../details/details.page';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
Structures : Structures[];
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public actionCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    private route: ActivatedRoute,
    public router: Router) {
      // On simule le fait que les articles proviennet d'une base de données
      this.Structures = [
        {
       
        title: 'IAI-NIGER',
        description: "L'Institut Africain d'Informatique (I.A.I), est une Ecole inter-Etats créée en 1971 au Tchad et dotée d'un Statut diplomatique, avec pour Siège Libreville au Gabon. Elle a pour vocation l’enseignement et la diffusion des connaissances informatiques auprès de ses onze Etats membres (Bénin ; Burkina Faso ; Cameroun ;Congo ;Côte-d'Ivoire ;Centrafrique ; Gabon ; Niger ; Sénégal ; Tchad ; Togo).",
        city: 'Niamey',
        id: '1',
        picture: [
          'assets/imgs/img1/1.jpg',
          'assets/imgs/img1/2.jpg',
          'assets/imgs/img1/3.jpg',
          'assets/imgs/img1/4.jpg',
          'assets/imgs/img1/5.jpg'
        ],
        averageStart: 5,
        category: 'Public',
        availability: true
      },
      {
       
        title: 'EST-NIGER',
        description: 'L’EST est un établissement Public à caractère Scientifique, Culturel et Technique, placé sous la tutelle administrative et technique du Ministère des postes, des Télécommunications et de l’Economie numérique et la tutelle financière est assurée par le Ministère des Finances.',
        city: 'Niamey',
        id: '2',
        picture: [
          'assets/imgs/img2/1.jpg',
          'assets/imgs/img2/2.jpg',
          'assets/imgs/img2/3.jpg',
          'assets/imgs/img2/4.jpg',
          'assets/imgs/img2/5.jpg'
        ],
        averageStart: 5,
        category: 'Public',
        availability: false
      },
      {
        title: 'EMIG',
        description: "L’École des mines, de l'industrie et de la géologie de Niamey (EMIG) est une institution d'enseignement supérieur nigérienne vouée à la formation d'ingénieurs et de techniciens. Les disciplines enseignées sont variées et couvrent des besoins du secteur public et privé ouest-africain : génie minier, géologie, génie civil, informatique industrielle.",
        city: 'Niamey',
        id: '3',
        picture: [
          'assets/imgs/img3/1.jpg',
          'assets/imgs/img3/2.jpg',
          'assets/imgs/img3/3.jpg',
          'assets/imgs/img3/4.jpg',
          'assets/imgs/img3/5.jpg'
        ],
        averageStart: 5,
        category: 'Public',
        availability: true
      },
      {
        title: 'IAT',
        description: "L’Institut Africain de Technologie (IAT) est une école de formation professionnelle et technique, crée en octobre 1999 par Arrêté N° 0143/MEN/DEPRI/DETFP DU 26 JUILLET 1999 et pour l’ouverture par Arrête N° 0233/MEN/DEPRI/DETFP DU 17 NOVEMBRE 1999 pour la formation dans des filières de secteurs divers et clés.",
        city: 'Maradi',
        id: '4',
        picture: [
          'assets/imgs/img4/1.jpg',
          'assets/imgs/img4/2.jpg',
          'assets/imgs/img4/3.jpg',
          'assets/imgs/img4/4.jpg',
          'assets/imgs/img4/5.jpg'
        ],
        averageStart: 3,
        category: 'Privée',
        availability: true
      },
      {
        title: 'EXCELLENCE',
        description: "Histoire. Le lycée d'excellence de Niamey a été fondé par Ibrahim Baré Maïnassara en 1996 dans le but de doter la Nation nigérienne d'une élite dans le domaine civil, à la suite de la création du réseau des Prytanées militaires.",
        city: 'Maradi',
        id: '5',
        picture: [
          'assets/imgs/img5/1.jpg',
          'assets/imgs/img5/2.jpg',
          'assets/imgs/img5/3.jpg',
          'assets/imgs/img5/4.jpg',
          'assets/imgs/img5/5.jpg'
        ],
        averageStart: 3,
        category: 'Public',
        availability: true
      }
      , {
        title: 'EAMAC',
        description: "Créée en 1963, l'Ecole Africaine de la Météorolgie et de l'Aviation Civile (EAMAC) est installée à Niamey (Niger), capitale politique et administrative du Niger, dans le quartier Plateau. Établissement Public à caractère administratif, l'EAMAC est une des trois (3) écoles de l'Agence pour la Sécurité de la Navigation Aérienne en Afrique et à Madagascar (ASECNA) et est placée sous la tutelle de la Direction Générale de l'Agence à Dakar.",
        city: 'Maradi',
        id: '6',
        picture: [
          'assets/imgs/img6/1.jpg',
          'assets/imgs/img6/2.jpg',
          'assets/imgs/img6/3.jpg',
          'assets/imgs/img6/4.jpg',
          'assets/imgs/img6/5.jpg'
        ],
        averageStart: 3,
        category: 'Autre',
        availability: false
      }
      

      ]
    }
    async showDetails(nomStructure : Structures) {

     // this.router.navigate('DetailsPage', {data: nomStructure});
     const navigationExtras: NavigationExtras = {
       queryParams: {
        image: nomStructure.picture,
        titre: nomStructure.title,
        description: nomStructure.description,
        city: nomStructure.city,
        category: nomStructure.category,
        availability: nomStructure.availability,
        averageStart: nomStructure.averageStart
         
       }
      }
      this.router.navigate(['/details'], navigationExtras);
    }
//cette methode permet de retourner en arriere
    goBack(): void{
      this.navCtrl.pop();
    }

}
