import { Component } from '@angular/core';
import { filter, switchMap } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-switch-map-filter',
  templateUrl: './switch-map-filter.component.html',
  styleUrls: ['./switch-map-filter.component.scss']
})
export class SwitchMapFilterComponent {

  constructor(private readonly service: ApiService) {

    // this.service.comments().pipe(switchMap((posts) => {
    //   return this.service.posts().pipe(filter((comments: any) => posts?.id == 1))
    // })).subscribe((data) => console.log(data))

    // this.service.comments().pipe(filter((data: any) => data?.id > 5)).subscribe((data) => console.log(data));

    const filterOnAge = this.service.comments().pipe(filter(person => person.age == 20 ));
    filterOnAge.subscribe(val=> console.log(val));
  }

}
