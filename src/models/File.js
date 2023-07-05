import { Schema, model, models } from "mongoose";

const FileSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name"],
        },
        lastName: {
            type: String,
            required: [true, "Please provide a last name"],
        },
        dni: {
            type: Number,
            required: [true, "Please provide a dni"],
        },
        invoice: {
            type: String,
        },
        files: {
            type: Array,
            // required: [true, "Please provide a file"],
        },
    },
    {
        timestamps: true,
    }
);

export const File = models.File || model("File", FileSchema);
