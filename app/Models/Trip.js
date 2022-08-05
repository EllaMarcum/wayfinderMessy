import { generateId } from "../Utils/generateId.js"

export class Trip {
  constructor(id, name) {
    this.id = id || generateId();
    this.name = name;
  }
  get Template() {
    return `
    <section class=" bg-light shadow m-5 my-card">
      <div class="row">
        <div class="col-12">
          ${this.name}
        </div>
        <h4 class="d-flex justify-content-between align-items-center">${this.name}<span class="fs-1 text-danger selectable" onclick="app.TripController.deleteTrip('${this.id}')">X</span></h4>
        </div>
        <div class="col-12 bg-light">
          <ul class="list-unstyled my-card-body">
          ${this.Reservations}
          </ul>
        </div>
        <div class="col-12 bg-light sticky-bottom rounded-bottom d-flex justify-content-center">
          <form class="row" onsubmit="app.tasksController.createTask('${this.id}')">
            <label for="name" class="form-label"></label>
            <input required type="text" class="form-control border-0 bg-light border border-bottom border-dark border-5" name="name" id="name" aria-describedby="emailHelp"
            placeholder="New List...">
            <button type="submit" class="mb-1 btn selectable ">Add</button>
          </form>
      </div>
      <div id="reservationContainer">
      </div>
      <div class="row">
        <div class="col-12">
          add a new reservation..
          leave a note about trip
        </div>
      </div>
    </section>
    `
  }
}