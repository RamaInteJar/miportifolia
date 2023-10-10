export const portifolioLoader = async() => {
    const res = await fetch('http://localhost:6060/portfolio')
    const portifolio = await res.json()
    console.log(portifolio)
    return portifolio
}

//non used example
export const userLoader = async() => {
    const res = await fetch('http://localhost:6060/portfolio')
    const portifolio = await res.json()
    console.log(portifolio)
    return portifolio
}