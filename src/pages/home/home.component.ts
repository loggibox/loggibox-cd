import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { PackageService } from '../../provider/pacote.service';
import { UserService } from '../../provider/user.service';
import { User } from '../../model/user';
import { Package } from '../../model/package';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PackageService, UserService]
})
export class HomeComponent implements OnInit {
  users: User[];
  user: string;
  packages: Package[];

  peso: string;
  prazo: string;
  lat: string;
  lng: string;

  constructor(
    private modalService: NgbModal,
    private packageService: PackageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
    this.listPackages();

    this.lat = "-23.5665414";
    this.lng = "-46.4013874";
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  public cadPackage() {
    let packageObject = new Package();
    packageObject.weight = parseInt(this.peso);
    packageObject.deadline_days = parseInt(this.prazo);
    packageObject.delivery_address = "Rua aleatória";
    packageObject.id_user = this.user;
    packageObject.route_start = "-23.5493015,-46.6393521";
    packageObject.route_end = String(this.lat) + "," + String(this.lng);
    packageObject.distribution_center = true;

    console.log(packageObject);

    this.packageService.addPacote(packageObject)
      .subscribe(res => {
        alert("Adicionado");
      }, err => {
        console.log("Erro");
        console.log(err);
      })
  }

  public getUsers() {
    this.userService.getUsers()
      .subscribe(res => {

        let response: any;
        response = res;


        this.users = new Array<User>();
        this.users = response.result;

        for (let user of this.users) {
          let location = user.route_end.split(",");
          let lat = location[0];
          let lng = location[1];

          if (lat != undefined && lng != undefined) {
            user.distance = "" + Math.round(this.distanceInKmBetweenEarthCoordinates(-23.5665414, -46.4013874, lat, lng));
          }


        }
      }, err => {
        console.log(err);
      });
  }

  public listPackages() {
    this.packages = new Array<Package>();

    this.packageService.getPacotesDisponiveis()
      .subscribe(res => {
        let response: any;
        response = res;

        
        this.packages = response.result;

      }, err => {
        console.log(err);
      });
  }

  public degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  public distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;

    var dLat = this.degreesToRadians(lat2 - lat1);
    var dLon = this.degreesToRadians(lon2 - lon1);

    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }

}
