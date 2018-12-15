import { Component, OnInit } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { PackageService } from '../../provider/pacote.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PackageService]
})
export class HomeComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private packageService: PackageService
  ) { }

  ngOnInit() {
    
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  public listPackages() {
    this.packageService.getPacotesDisponiveis()
    .subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  public addPackage() {
    var pacote = "";
    this.packageService.addPacote(pacote)
    .subscribe(res => {
      alert("Adicionado");
    }, err => {
      console.log("Erro");
      console.log(err);
    })
  }

  public degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  
  public distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;
  
    var dLat = this.degreesToRadians(lat2-lat1);
    var dLon = this.degreesToRadians(lon2-lon1);
  
    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);
  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return earthRadiusKm * c;
  }
  
}
