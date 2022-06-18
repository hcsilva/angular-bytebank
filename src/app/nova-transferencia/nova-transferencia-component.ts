import { Transferencia } from './../models/transferencia.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia-component.html',
  styleUrls: ['./nova-transferencia-component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Solicitada nova transferêncis');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(valorEmitir).subscribe({
      next: (v) => console.log('Next: ' + v),
      error: (e) => console.error(e),
      complete: () => {
        console.log(),
          this.limparCampos(),
          this.router.navigateByUrl('extrato');
      },
    });
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
