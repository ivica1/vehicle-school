import { makeObservable, observable, computed } from "mobx"

class VehicleMakeStore {

    vehicleMakes = [
        {id:1, name: "Audi", abrv: "AU"},
        {id:2, name: "Volkswagen", abrv: "VW"},
        {id:3, name: "Mercedes", abrv: "B220"}
    ]

    get getVehicleMakesNumber () {
        return this.vehicleMakes.length;
    }

    constructor () {
        makeObservable( this, {
            vehicleMakes: observable,
            getVehicleMakesNumber: computed
        })  
    }
}

const vehicleMakeStore = new VehicleMakeStore();

export default vehicleMakeStore;