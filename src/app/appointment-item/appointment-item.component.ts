import { Component, Input } from '@angular/core';
import { Service } from '../models/service.model';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrl: './appointment-item.component.css'
})
export class AppointmentItemComponent {
@Input() service?: Service;

removeAppointment(service: Service){
  alert(`A foglalás leadva a következő időpontra: ${service.}`)
}
}
