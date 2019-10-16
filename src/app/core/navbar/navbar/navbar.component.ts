import { Component, OnInit } from '@angular/core';
import { SegurancaService } from 'src/app/seguranca/seguranca.service';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private segurancaService : SegurancaService, private router : Router,
    private confirmation : ConfirmationService) { }

  ngOnInit() {
  }

  novoAccessToken(){
    this.segurancaService.obterNovoAccessToken();
  }


  deslogar(){
    this.confirmation.confirm({
      message : 'Tem certeza que deseja sair ?',
      accept : () => {
        this.logout();
         
      }

    })
  }


  logout(){
    this.segurancaService.logout()
    .then(() => {
      this.router.navigate(['/login']);
    })
  }

}
