import { Component } from '@angular/core';
import { Service } from '../models/service.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {

  service: Service | undefined;

  services: Service[] = [
    {
      id: 1,
      name: 'Masszázs',
      description:
        'Relaxáló masszázs, amely segít enyhíteni a stresszt és a fáradtságot.',
      availableTimes: ['10:00', '11:30', '13:00', '14:30', '16:00'],
      person: {
        name: 'Kovács Anna',
        photoUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
      },
    },
    {
      id: 2,
      name: 'Fodrász',
      description: 'Modern hajvágás és stílustanácsadás profi szakemberekkel.',
      availableTimes: ['09:00', '10:30', '12:00', '13:30', '15:00'],
      person: {
        name: 'Nagy Béla',
        photoUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
      },
    },
    {
      id: 3,
      name: 'Manikűr',
      description:
        'Kéz- és körömápolás, amely magába foglalja a klasszikus manikűrt és gél lakkozást is.',
      availableTimes: ['09:00', '10:00', '11:00', '13:00', '14:00', '16:00'],
      person: {
        name: 'Szabó Katalin',
        photoUrl: 'https://randomuser.me/api/portraits/women/11.jpg',
      },
    },
    {
      id: 4,
      name: 'Pedikűr',
      description:
        'Teljes körű lábápolás és körömkezelés kényelmes környezetben.',
      availableTimes: ['10:00', '11:30', '13:00', '14:30', '16:00'],
      person: {
        name: 'Kiss József',
        photoUrl: 'https://randomuser.me/api/portraits/men/51.jpg',
      },
    },
    {
      id: 5,
      name: 'Arcápolás',
      description:
        'Kényeztető arcápolás, amely segít megőrizni bőröd üdeségét és ragyogását.',
      availableTimes: ['08:30', '10:00', '11:30', '13:00', '14:30'],
      person: {
        name: 'Tóth Lívia',
        photoUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
      },
    },
    {
      id: 6,
      name: 'Szemöldökformázás',
      description: 'Szemöldök szedés és festés személyre szabottan.',
      availableTimes: ['09:00', '10:00', '11:00', '12:00', '14:00'],
      person: {
        name: 'Horváth Zsófia',
        photoUrl: 'https://randomuser.me/api/portraits/women/13.jpg',
      },
    },
    {
      id: 7,
      name: 'Személyi edzés',
      description:
        'Egyéni edzéstervek és motiváció személyi edzőtől a céljaid eléréséhez.',
      availableTimes: ['07:00', '08:30', '10:00', '12:00', '14:00'],
      person: {
        name: 'Kiss András',
        photoUrl: 'https://randomuser.me/api/portraits/men/19.jpg',
      },
    },
    {
      id: 8,
      name: 'Jógaóra',
      description:
        'Nyugtató jógaórák különböző szinteken, a stressz és a feszültség enyhítésére.',
      availableTimes: ['06:00', '07:30', '09:00', '11:00', '17:00'],
      person: {
        name: 'Németh Emma',
        photoUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
      },
    },
    {
      id: 9,
      name: 'Testmasszázs',
      description: 'Izomlazító testmasszázs a fáradt izmok regenerálásához.',
      availableTimes: ['09:30', '11:00', '12:30', '14:00', '15:30'],
      person: {
        name: 'Bene Péter',
        photoUrl: 'https://randomuser.me/api/portraits/men/34.jpg',
      },
    },
    {
      id: 10,
      name: 'Gyógytorna',
      description:
        'Egyéni gyógytornakezelések mozgásszervi problémák enyhítésére.',
      availableTimes: ['08:00', '09:30', '11:00', '13:00', '15:00'],
      person: {
        name: 'Farkas Anikó',
        photoUrl: 'https://randomuser.me/api/portraits/women/41.jpg',
      },
    },
  ];
}
