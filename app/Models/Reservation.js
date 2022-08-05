import { generateId } from "../Utils/generateId.js"

export class Reservation {
  constructor(id, tripId, type, name, number, date, cost) {
    this.id = id || generateId();
    this.tripId = tripId;
    this.type = type;
    this.name = name;
    this.number = number;
    this.date = date;
    this.cost = cost;
  }

  get Template() {
    return `
    <div class="row">
      <div class="col">
      ${this.name}
      </div>
    </div>
    `;
  }
}