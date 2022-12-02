const staticUrl = (path, width = 0, height = 0, quality = 100) => {
    let params = []

    if (width > 0)
        params.push(`w=${width}`)

    if (height > 0)
        params.push(`h=${height}`)

    params.push(`q=${quality}`)

    return `https://static.aryaland.ir/${path}?` + params.join('&')
}

export default staticUrl ; 