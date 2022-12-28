//crear esquema de fragancia
import mongoose from 'mongoose';

const  { Schema } = mongoose;

const fraganseSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true,
        },
        isDeleted:{
            type: Boolean,
            default: false
        }
        /*size: {
            type: Number,
            required: true
        },
        
        color:{
            type: String,
            required: true
        },
        aroma: {
            type: String
            // enum
        },
        concentracion: {
            type: Number
            // enum
        },
        precio: {
            type: Number,
            }*/
    },
    {
        collection: 'fragances',
        versionKey: false,
    }
);

const Fragance = mongoose.model('Fragance', fraganseSchema);

export default Fragance;

