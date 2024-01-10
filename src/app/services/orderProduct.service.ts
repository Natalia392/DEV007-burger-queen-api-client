import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewOrder, ProcessedOrder, RPOrder, ResponseOrder } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderProductService {
  private apiUrl = 'http://127.0.0.1:8080/';
  private pollingInterval = 1200000; //1200000 (para dejar cuando no quiero que cambie tan seguido)

  constructor(private http: HttpClient) { }

  // La constante headers es igual en todos los métodos del servicio:
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accesToken')}`,
  });

  // Crea una orden
  postOrder(data: NewOrder): Observable<ResponseOrder> {
    const direction = this.apiUrl + 'orders';

    const orderInfo =  data;
    const options = { headers: this.headers };

    return this.http.post<ResponseOrder>(direction, orderInfo, options);
  }

  // Obtiene órdenes procesadas y también las delivered PARECE
  getOrders(): Observable<RPOrder[]> {
    const direction = this.apiUrl + 'orders';

    const options = {headers: this.headers};

    return timer(0, this.pollingInterval).pipe(
      switchMap(() => this.http.get<RPOrder[]>(direction, options))
    );
  }

  // Obtiene las órdenes que están listas (?)
  getOrdersReady(): Observable<ProcessedOrder[]> {
    const direction = this.apiUrl + 'orders';

    const options = {headers: this.headers};

    return timer(0, this.pollingInterval).pipe(
      switchMap(() => this.http.get<ProcessedOrder[]>(direction, options))
    );
  }

  // para cambiar los pedidos a que están listos para se entregados
  processOrder(id: number): Observable<ProcessedOrder> {
    const direction = this.apiUrl + `orders/${id}`;

    const orderInfo = {
      status: 'delivering', // se cambió a delivering siguiendo el schema (previo a delivered, cuando ya está listo)
      // dateProcessed: new Date(),  Esto sólo queda como delivering, sin fecha nueva
      // OJO, VER CÓMO HACER PARA CALCULAR EL TIEMPO SI ES QUE NO HAY UNA FECHA ADICIONAL ESTA VEZ
    }
    const options = { headers: this.headers };
    return this.http.patch<ProcessedOrder>(direction, orderInfo, options);
  }


  markReady(id: number): Observable<ProcessedOrder> {
    const direction = this.apiUrl + `orders/${id}`;

    const orderInfo = {
      status: 'delivered',
      dateProcessed: new Date(), // Aquí ya lleva fecha nueva, porque ya fue entregado
    }
    const options = { headers: this.headers };
    return this.http.patch<ProcessedOrder>(direction, orderInfo, options);
  }

}

