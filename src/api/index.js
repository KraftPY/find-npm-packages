const link = 'https://data.jsdelivr.com/v1/stats/packages/year'
export default {
  getPackages() {
    return fetch(link)
      .then((res) => res.json())
      .then((data) => data)
  }
}