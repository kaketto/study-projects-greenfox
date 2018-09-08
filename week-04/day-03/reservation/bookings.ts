'use strict';
import { Reservation } from "./class-reservation";

class Bookings {
  private bookings: Object[];

  constructor() {
    this.bookings = [];
  }

  add(numberOfBookings: number): Object[] {
    for (let i: number = 0; i < numberOfBookings; i++) {
      this.bookings.push(new Reservation().getBookingItem());
    }
    return this.bookings;
  }

  print(): void {
    this.bookings.forEach(elem => console.log(elem));
  }
}

let bookingsToHawaii = new Bookings();
bookingsToHawaii.add(10);
bookingsToHawaii.print();
console.log(bookingsToHawaii);
console.log(bookingsToHawaii[0]);

