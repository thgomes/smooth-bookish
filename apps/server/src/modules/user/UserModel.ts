import { Document, Schema, Model, model } from 'mongoose'
import { hash } from 'bcryptjs'

export interface IUser extends Document {
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    hashPassword(password: string): Promise<string>
}

const UserSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            minlength: 3,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        collection: 'User',
        timestamps: true,
    }
)

UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await this.hashPassword(this.password)
    }
    return next()
})

UserSchema.methods = {
    hashPassword: async function (password: string) {
        return await hash(password, 10);
    }
}

export const UserModel: Model<IUser> = model('User', UserSchema);
