import { Component, OnInit } from '@angular/core';
import { SegurancaService } from 'src/app/seguranca/seguranca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private segurancaService : SegurancaService, private router : Router) { }

  ngOnInit() {
  }

  novoAccessToken(){
    this.segurancaService.obterNovoAccessToken();
  }

  logout(){
    this.segurancaService.logout()
    .then(() => {
      this.router.navigate(['/login']);
    })
  }

}
