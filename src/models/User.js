import { Schema, model, models } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "El email es requerido"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "La contraseña es requerida"],
    },
});

// Antes de guardar el usuario, se hashea la contraseña
UserSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

// Método para comparar si la contraseña ingresada por el usuario es igual a la contraseña almacenada en la base de datos
UserSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};

export const User = models.User || model("User", UserSchema);
