import { Reservationy } from "./reservationy";

'use strict';

export class Reservation implements Reservationy {
  bookingDetails: {code: string, day: string};
  constructor() {
    this.bookingDetails = {code: '' , day: ''};
  }

  getCodeBooking(): void {
    let bookingCode: string = Math.random().toString(36).toUpperCase().substr(2, 8);
    this.bookingDetails.code = bookingCode;
  }

  getDowBooking(): void {
    let DOW: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let bookingDate: string = DOW[Math.floor(Math.random() * 7)];
    this.bookingDetails.day = bookingDate;
  }

  getBookingdetails(): string {
    return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`;
  }

  getBookingItem(): {} {
    this.getCodeBooking();
    this.getDowBooking();
    return this.bookingDetails;
  }
}
