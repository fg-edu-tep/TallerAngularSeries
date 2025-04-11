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
  constructor(private SerieService: SerieService) { }

  getSeries(){
    this.SerieService.getSeries().subscribe(series => {

      this.series = series;
    });
  }
  ngOnInit() {
    this.getSeries();
  }

}
