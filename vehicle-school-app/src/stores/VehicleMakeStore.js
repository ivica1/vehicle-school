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

    deleteVehicleMake (id) {
        this.vehicleMakes = this.vehicleMakes.filter((vehicle)=>vehicle.id!==id)
    }

    editVehicleMake (id, name, abrv) {
        let tempVehicleMakes = []

        this.vehicleMakes.forEach((vehicleMake, index)=>{
            if(vehicleMake.id!==id) {
                tempVehicleMakes.push(vehicleMake)
            } else {
                tempVehicleMakes.push({id:id, name: name, abrv: abrv})
            }
        })
        this.vehicleMakes=[...tempVehicleMakes]
    }

    createVehicleMake (name, abrv) {
        this.vehicleMakes.unshift({id:Math.random(), name:name, abrv:abrv})
    }
}

const vehicleMakeStore = new VehicleMakeStore();

export default vehicleMakeStore;