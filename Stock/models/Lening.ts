import Lener from './Lener'
import Materiaal from './Materiaal'

export default interface Lening {
        leningId: string,
        date: Date,
        hoeveelheid: number,
        pending: boolean,
        materiaalId: string,
        materiaal: Materiaal,
        lenerId: string,
        lener: Lener
}