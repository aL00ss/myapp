import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})


export class HomePage {
  
Montexte="Bonjour";
  constructor(private router: Router, private activeRoute : ActivatedRoute) {
    
  }
  MonClick(){
    this.router.navigate(['/page2', navigationExtras]);
  }
  

}
  // Pour passer des paramètres
let navigationExtras: NavigationExtras = {
state : {
param1: " valeur "
}
};
