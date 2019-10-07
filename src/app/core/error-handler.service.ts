import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toasty : ToastyService) { }


  handle(errorResponse : any){
    let mensagem : string;

    if(typeof errorResponse === 'string'){
      mensagem = errorResponse;
    }else{
      mensagem = 'Error ao processar servico remoto. Tente novamente.';
      console.log('Ocorreu um erro', errorResponse);
    }
    this.toasty.error(mensagem);
  }


  
}
