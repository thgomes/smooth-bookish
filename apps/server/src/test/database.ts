import mongoose from 'mongoose'
import { config } from '../config'

async function connectDatabase() {
  await mongoose.connect(config.MONGO_URI_TEST)
}

async function disconnectDatabase() {
  await mongoose.disconnect()
}

async function clearDatabase() {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany({})
  }
}

export { connectDatabase, disconnectDatabase, clearDatabase }
