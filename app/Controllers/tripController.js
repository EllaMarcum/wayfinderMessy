import { ProxyState } from "../AppState.js";

export class TripController {
  constructor() {
    this._drawTrip();

  }
  _drawTrip() {
    //this creates a variable and sets value to an empty string
    let template = ''
    //creates a variable and is setting it equasl to the array from appstate
    let trips = ProxyState.values
    //this iterates over the array and gets the template for each trip
    trips.forEach(t => template += t.Template);
    // @ts-ignore
    document.getElementById('app').innerHTML = template
  }
}

// createTrip() {
//   window.event.preventDefault()

//   let form = window.event.target
//   console.log('form', form);

//   let newTrip = {
//     name: form.name.value,
//     color: form.color.value
//   }

//   Tripservice.createTrip(newtrip)
//   console.log(newTrip);
//   form.reset()
// }