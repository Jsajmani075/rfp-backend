import Redis from 'ioredis'
require('dotenv').config();
const connectionOptions = {
  host: PROCESS.env.REDIS_HOST,
  port: PROCESS.env.REDIS_PORT,
  password: PROCESS.env.REDIS_PASSWORD

}

export const client = new Redis(connectionOptions)
export const getCache = async (key) => {
  const data = await client.get(key)
  return data
}
export const setCache = async (key, value, expire) => {
  if (expire) {
    await client.set(key, value, 'EX', expire)
  }
  else await client.set(key, value)
}
export const deleteCache = async (key) => {
  await client.del(key)
}