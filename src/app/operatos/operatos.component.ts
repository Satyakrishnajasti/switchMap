import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-operatos',
  templateUrl: './operatos.component.html',
  styleUrls: ['./operatos.component.scss'],
})
export class OperatosComponent implements OnInit {
  constructor(private readonly service: ApiService) {}

  public data: any;

  ngOnInit(): void {
    this.service
      .comments()
      .pipe(map((data, index) => data.postId == 1))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
