import mongoose, { Document, Schema } from "mongoose";

interface VendorDoc extends Document {
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

const VendorSchema = new Schema(
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

const VendorModel = mongoose.model<VendorDoc>("Vendor", VendorSchema);

export { VendorModel };

export const getAllVandors = () => VendorModel.find();
export const getVendorById = (id: string) => VendorModel.findById(id);
export const getVendorByEmail = (email: string) =>
  VendorModel.findOne({ email });
export const createVendor = (values: Record<string, any>) =>
  new VendorModel(values).save().then((vendor) => vendor.toJSON());
export const updateVendor = (id: string, values: Record<string, any>) =>
  VendorModel.findByIdAndUpdate(id, values);
