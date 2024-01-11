import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {
  // Aquí se almacenan los datos
  private elapsedTimeMap: Map<number, number> = new Map();

  // Método que establece los datos en elsapedTimeMap
  setElapsedTime(orderId: number, elapsedTime: number) {
    this.elapsedTimeMap.set(orderId, elapsedTime);
  }

  // Método que recupera los datos de elapsedTimeMap
  getElapsedTime(orderId: number) {
    return this.elapsedTimeMap.get(orderId) || 0;
  }

}
