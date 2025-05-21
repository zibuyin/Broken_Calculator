export function question(numPairs) {
    let dictionary = []

    dictionary.length = numPairs

    let key1 = 0
    let key2 = 0

    for (var i = 0; i < numPairs; ++i) {
        key1 = Math.floor(Math.random()*9)
        key2 = Math.floor(Math.random()*9)
    
        while (key2 == key1) {
            key2 = Math.floor(Math.random()*9)
        }
    
        dictionary[i] = [`'${i}': [${key1}, ${key2}]`]
    }

    return(
        <div>
            {dictionary}
        </div>
    )
}