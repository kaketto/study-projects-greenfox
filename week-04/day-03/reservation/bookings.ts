'use strict';
import { Reservation } from "./class-reservation";

class Bookings {
  private bookings: string[];

  constructor() {
    this.bookings = [];
  }

  add(numberOfBookings: number): string[] {
    for (let i: number = 0; i < numberOfBookings; i++) {
      this.bookings.push((new Reservation()).getBookingdetails());
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