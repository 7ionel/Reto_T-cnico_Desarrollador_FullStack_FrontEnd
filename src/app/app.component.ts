import { Component, OnInit,ViewChild} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppMaterialModule } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PosicionService } from './services/posicion.service';
import { FutbolistaService } from './services/futbolista.service';
import { Posicion } from './models/posicion.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Futbolista } from './models/futbolista.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,AppMaterialModule, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  //Grila
  dataSource: any;

 //Clase para la paginacion
 @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

 //Cabecera
 displayedColumns = ["id","nombres","apellidos","fechaNacimiento","caracteristicas","posicion"];
 
 
  title = 'Prueba';
  //Filtro
 filtro: number = -1;
  varIdPosicion: number = -1;
  lstPosicion: Posicion[] =[];

  constructor(private posicionService: PosicionService, private futbolistaService: FutbolistaService){}

  ngOnInit(): void {
    this.posicionService.listaPosicion().subscribe(
      x => this.lstPosicion =x
    );
  }

  refreshTable(){
    console.log(">>> refreshTable [ini]");
    var msgFiltro =this.varIdPosicion == -1 ? -1 : this.varIdPosicion;
    this.futbolistaService.listaFutbolistaXPosicion(msgFiltro).subscribe(
      x=> {
        this.dataSource =new MatTableDataSource<Futbolista>(x);
        this.dataSource.paginator =this.paginator;
      }
    );
  }
}