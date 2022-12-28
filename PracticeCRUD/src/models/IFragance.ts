import mongoose from "mongoose";

export default interface IFragance{
    _id? : mongoose.Types.ObjectId,
    name: string,
    description: string,
    isDeleted?: boolean,
    /*size: number,
    color: string,                                                    
    aroma: string,
    concentracion: string,
    precio*/
}

/*export enum EFragance{

}*/