import { Component, OnInit } from '@angular/core';
import { ProcessedOrder, RPOrder } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';
@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  ordersReady: ProcessedOrder[] = [];
  pendingOrders: RPOrder[] = [];
  ordersDelivering: RPOrder[] = [];
  ordersDelivered: ProcessedOrder[] = [];

  constructor(private ordersService: OrderProductService) {}

  ngOnInit(): void {
    this.getOrderReady();
    this.showPendingOrders();
    this.showOrdersDelivering();
    this.getOrdersDelivered();
  }

  getOrderReady() {
    this.ordersService.getOrdersReady().subscribe((data) => {
      this.ordersReady = data;
    });
  }

  markOrderDelivered(id: number) {
    const index = this.ordersReady.findIndex(item => item.id === id);
    if(index !== -1)
    this.ordersService.markReady(id).subscribe((data) => {
      this.ordersReady = this.ordersReady.splice(index, 1);
      this.ordersDelivered.push(data);
    })
  }

  showPendingOrders() {
    this.ordersService.getOrders().subscribe((data) => {
      this.pendingOrders = data.filter(order => order.status === 'pending');
      console.log(this.pendingOrders);
    });
  }

  showOrdersDelivering() {
    this.ordersService.getOrders().subscribe((data) => {
      this.ordersDelivering = data.filter(order => order.status === 'delivering');
      console.log(this.ordersDelivering);
    })
  }

  getOrdersDelivered() {
    this.ordersService.getOrdersReady().subscribe((data) => { // Modificar la función del servicio (falta crearla) por la que lo cambia efectivamente a delivered.
      this.ordersDelivered = data.filter(order => order.status === 'delivered');
      console.log(this.ordersDelivered);
    })
  }

}
