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
  
}
