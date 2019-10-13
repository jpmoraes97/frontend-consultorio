import { Component, OnInit } from '@angular/core';
import { SegurancaService } from 'src/app/seguranca/seguranca.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private segurancaService : SegurancaService) { }

  ngOnInit() {
  }

}
