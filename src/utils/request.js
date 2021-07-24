import fetch from 'unfetch'

export async function getHotTokens() {
  const result = await (await fetch('http://localhost:8080/v1.0/dogeson/hot')).json()
  return result
}

export async function getTokenInfo(dexId) {
  const result = await (await fetch(`http://localhost:8080/v1.0/dogeson/info/dex/${dexId}`)).json()
  return result
}

export async function getHistoricalData(geckoId, days) {
  // const result = await (await fetch(`http://localhost:8080/v1.0/dogeson/historical?geckoId=${geckoId}&span=week`)).json()
  // return result
  return null
}