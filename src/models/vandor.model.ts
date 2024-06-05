import mongoose, { Document, Schema } from "mongoose";

interface VandorDoc extends Document {
  name: string;
  ownerName: string;
  foodType: [string];
  pincode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  salt: string;
  serviceAvailable: boolean;
  coverImages: [string];
  rating: number;
  // foods: any,
}

const VandorSchema = new Schema(
  {
    name: { type: String, required: true },
    ownerName: { type: String, required: true },
    foodType: { type: [String] },
    pincode: { type: String, required: true },
    address: { type: String },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    serviceAvailable: { type: Boolean },
    coverImages: { type: [String] },
    rating: { type: Number },
    // foods: [{
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'food'
    // }],
  },
  {
    timestamps: true,
  }
);

const VandorModel = mongoose.model<VandorDoc>("Vandor", VandorSchema);

export { VandorModel };

export const getAllVandors = () => VandorModel.find();
export const getVandorById = (id: string) => VandorModel.findById(id);
export const getVandorByEmail = (email: string) =>
  VandorModel.findOne({ email });
export const createVandor = (values: Record<string, any>) =>
  new VandorModel(values).save().then((vandor) => vandor.toJSON());
export const updateVandor = (id: string, values: Record<string, any>) =>
  VandorModel.findByIdAndUpdate(id, values);
