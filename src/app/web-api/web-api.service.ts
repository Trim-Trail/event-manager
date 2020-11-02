import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiService implements InMemoryDbService {

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const events = [
      { id: 1, name: 'Event1', address: 'USA, NY', date: '2020-10-04T22:23:47.971Z', image: '' }
    ];

    return { events };
  }

  genId(events: any[]): number {
    return events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;
  }
}
