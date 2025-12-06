const Redis = require('ioredis')
require('dotenv').config();

// const connectionOptions = {
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
//   password: process.env.REDIS_PASSWORD

// }

const client = new Redis(process.env.REDIS_URL)

const getCache = async (key) => {
  const data = await client.get(key)
  return data
}

const setCache = async (key, value, expire) => {
  if (expire) {
    await client.set(key, value, 'EX', expire)
  }
  else await client.set(key, value)
}

const deleteCache = async (key) => {
  await client.del(key)
}
const deleteByPattern = async (pattern) => {
  const keys = await client.keys(pattern);
  if (keys.length > 0) {
    await client.del(...keys);
  }
};

module.exports = { deleteCache, setCache, getCache, client, deleteByPattern }