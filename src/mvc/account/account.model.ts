import { Schema, model } from 'mongoose';
import { MongoSchema } from '../../common/types/mongo.types';

type UserSchema = {
    email: string;
    name: string; // Note: This should cause a type error
};

type UserSchemaModel = MongoSchema<UserSchema>;

const accountSchema = new Schema<UserSchemaModel>(
    {
        email: { type: String, require: true },
        name: { type: String, require: true }
        // favorites: [{ type: Schema.Types.ObjectId, ref: "Product", default: [] }],
    },
    { timestamps: true }
);

export default model<UserSchemaModel>('account', accountSchema, 'accounts');
