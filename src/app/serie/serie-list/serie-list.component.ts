import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  series: Array<Serie> = []; 
  selected: any = null;
  constructor(private SerieService: SerieService) { }

  getSeries(){
    this.SerieService.getSeries().subscribe(series => {

      this.series = series;
    });
  }
  ngOnInit() {
    this.getSeries();
  }

  selectSerie(Serie: Serie){
    console.log('Selected:', Serie.id);  // <- test if it's working
    this.selected = Serie;
  }

  calcularAvg(){
    let promedios: number[] = [];
    for  (let i = 0; i < this.series.length; i++) {
        promedios.push(this.series[i].seasons);
        }

    let sum = 0;

        for  (let j = 0; j < promedios.length; j++){
            sum += promedios[j];
        }

        let avg = sum/promedios.length;

        return avg;
    }

}
