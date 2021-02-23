import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://registry.npmjs.org/-/v1/search?size=250&text=',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

export default {
  getPackages(name) {
    return instance
      .get(name)
      .then((res) => res.data)
      .catch((err) => err)
  }
};
