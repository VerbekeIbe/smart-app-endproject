import Lener from "../../models/Lener";
import Lening from "../../models/Lening";
import Materiaal from "../../models/Materiaal";

export const createLenerObject = (Data : any) : Lener => {
    return {
        lenerId : Data.lenerId,
        naam: Data.naam,
        voornaam: Data.voornaam,
        email: Data.email
}
}

export const createMateriaalObject = (Data : any) : Materiaal => {
    return {
        materiaalId : Data.materiaalId,
        naam: Data.naam,
        stock: Data.stock,
        categorie: Data.categorie,
        drempel: Data.drempel
    }
} 

export const createLeningObject = (Data : any) : Lening => {
    return {
        leningId : Data.leningId,
        date : Data.date,
        hoeveelheid : Data.hoeveelheid,
        pending : Data.pending,
        materiaalId: Data.materiaalId,
        materiaal: createMateriaalObject(Data.materiaal),
        lenerId: Data.lenerId,
        lener: createLenerObject(Data.lener)

    }
} 

