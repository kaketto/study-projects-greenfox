import { Reservationy } from "./reservationy";

'use strict';

export class Reservation implements Reservationy {
  constructor() {
  }

  getCodeBooking(): string {
   return Math.random().toString(36).toUpperCase().substr(2, 8);
  }

  getDowBooking(): string {
    let DOW: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return DOW[Math.floor(Math.random() * 7)];
  }

  getBookingdetails(): string {
    return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`;
  }
}
