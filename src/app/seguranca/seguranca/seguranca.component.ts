import { Component, OnInit } from '@angular/core';
import { SegurancaService } from '../seguranca.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seguranca',
  templateUrl: './seguranca.component.html',
  styleUrls: ['./seguranca.component.css']
})
export class SegurancaComponent implements OnInit {


  constructor(private segurancaService : SegurancaService, private router : Router) { }

  ngOnInit() {
  }

  login(email : string, senha : string){
    this.segurancaService.login(email, senha)
    .then(() => {
      this.router.navigate(['dashboard']);
    })
  }

}
