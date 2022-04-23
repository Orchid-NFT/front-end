const hash = "QmXjvjbFKHc7ELzE9ZBvacABvpB4XrBeUSGS4WSa8NP34q"


export function getUrl(url){
    console.log(`https://gateway.pinata.cloud/ipfs/${hash}/${url}`)
    return `https://gateway.pinata.cloud/ipfs/${hash}/${url}`   
    
}