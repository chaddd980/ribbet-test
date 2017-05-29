import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {
  constructor(private http: Http) {}

  fetchData() {
      return this.http.get('https://ribbettest.herokuapp.com/api').map((response: Response) => response.json());
  }
}
