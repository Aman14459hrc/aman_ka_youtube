import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "JsonWebTokenError"


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,

    },
    Email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    avtar: {
        type: String,
        required: true
    },
    coverimage: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    refreshToken: {
        type: String,
        unique: true
    },
    ActiveToken: {
        type: String,
        unique: true
    },
    Watchistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "videomodel"
    }
    ]



}, {
    timestamps: true
});


schema.pre('save', async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    } else {
        next()
    }

    next();
});

userSchema.method.ispasswordcorrect = async function () {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign({
        _id: this._id,
        email: this.Email,
        username: this.username,
        fullName: this.fullName
    }, process.env.ACCESS_TOKEN_SECRET

        , {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
};


userSchema.methods.refreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.Email
        },
        process.env.REFRESH_TOKEN_SECRET
        , {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export default User = mongoose.model("User", userSchema);