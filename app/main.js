import { ValuesController } from "./Controllers/ValuesController.js";
import { TripController } from "./Controllers/TripController.js";

class App {
  tripController = new TripController();
}

window["app"] = new App();
