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

  constructor(private ordersService: OrderProductService) {}

  ngOnInit(): void {
    this.getOrderReady();
    this.showPendingOrders();
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
      console.log(data);
    })
  }

  showPendingOrders() {
    this.ordersService.getOrders().subscribe((data) => {
      this.pendingOrders = data.filter(order => order.status === 'pending');
    });
  }

  // getOrdersDelivered() {
  //   this.orderService.getOrdersReady().subscribe((data) => {
  //     this.ordersDelivered = data.filter(order => order.status === 'delivered');
  //   })
  // }
}
