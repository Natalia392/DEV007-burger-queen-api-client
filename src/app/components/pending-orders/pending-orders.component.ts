import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RPOrder } from 'src/app/models/products.interface';
import { OrderProductService } from 'src/app/services/orderProduct.service';
import { TimeTrackingService } from 'src/app/services/time-tracking.service';


@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {

  @Output() orderReady = new EventEmitter<RPOrder>();

  pendingOrders: RPOrder[] = [];

  elapsedMinutes = 0;

  constructor(private ordersService: OrderProductService, private timeTrackingService: TimeTrackingService) {}

  ngOnInit(): void {
    this.showPendingOrders();
    this.updateOrdersView();
  }

  showItem(a: RPOrder) {
    console.log(a);
  }

  showPendingOrders() {
    this.ordersService.getOrders().subscribe((data) => {
      this.pendingOrders = data.filter(order => order.status === 'pending');
    });
  }

  updateOrdersView(): void {
    this.pendingOrders = this.pendingOrders.slice().sort((a, b) => {
      return new Date(b.dateEntry).getTime() - new Date(a.dateEntry).getTime();
    });
  }

  markAsReady(id: number) {
    const index = this.pendingOrders.findIndex(item => item.id === id);
    if (index !== -1) {
      // obtiene el tiempo inicial (el momento en el que el pedido ingresó)
      const startTime = new Date(this.pendingOrders[index].dateEntry);

      this.ordersService.processOrder(id).subscribe((data) => {
        // Obtiene el tiempo en el que se marca como ready, que sería el endTime de preparación
        const endTime = new Date();
        // Se calcula el tiempo transcurrido desde que ingresó hasta que se preparó
        const elapsedTime = endTime.getTime() - startTime.getTime();
        const elapsedSeconds = Math.floor(elapsedTime / 1000);
        this.elapsedMinutes = Math.floor(elapsedSeconds / 60);

        this.timeTrackingService.setElapsedTime(id, this.elapsedMinutes); // línea agregada tras la creación del servicio

        this.pendingOrders.splice(index, 1);
        this.orderReady.emit(data);
        console.log(data, this.elapsedMinutes);
      })
    }
  }

}
