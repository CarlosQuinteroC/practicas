import Fragance from "../database/fragance";
import IFragance from "../models/IFragance";


export default class fraganceService{

    public static createFragance(fragance: IFragance): Promise<String>{
        return new Promise(async (resolve, reject) => {
            try {
                await Fragance.create(fragance);
                resolve('Fragancia creada correctamente')
            } catch (error) {
                reject(error);
            }
        });
    }
    
    public static getFragances(): Promise<IFragance[]>{
        return new Promise(async(resolve, reject) => {
            try {
                const resultService = await Fragance.find({ isDeleted: false });
                resolve(resultService);
            } catch (error) {
                reject(error);
            }
        });
    }

public static editFragance(fraganceId: Object, fragance: IFragance): Promise<string>{
    return  new Promise(async(resolve, reject) => {
        try {
            await Fragance.updateOne({ _id: fraganceId}, fragance)
            resolve('Fragancia editada correctamente')
        } catch (error) {
            reject(error);
        }
    });
}

public static deleteFragance(fraganceId: Object, ): Promise<string>{
    return new Promise(async(resolve, reject) => {
        try {
            await Fragance.updateOne({_id: fraganceId}, { isDeleted: true })
            resolve('Fragancia eliminada correctamente');
        } catch (error) {
            reject(error);
        }
    });
}
}