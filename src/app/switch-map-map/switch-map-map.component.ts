import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-switch-map-map',
  templateUrl: './switch-map-map.component.html',
  styleUrls: ['./switch-map-map.component.scss']
})
export class SwitchMapMapComponent {

  constructor(private readonly service: ApiService) {

    this.service.posts().pipe(switchMap((user)=>{
      return this.service.comments().pipe(map((comments)=> ({user,comments}) ))
    })).subscribe((data)=> console.log(data))
  }
}
