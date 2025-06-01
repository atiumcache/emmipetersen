export const BOOKING_LINK = {
  url: '/contact',
  owner: '35894702',
  ref: 'booking_button',
  
  get fullUrl() {
    return `${this.url}?owner=${this.owner}&ref=${this.ref}`;
  }
};
