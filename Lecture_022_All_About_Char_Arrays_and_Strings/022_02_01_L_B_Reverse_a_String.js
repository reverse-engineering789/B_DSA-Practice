// Not getting any output



let reverse = (name) => {
    // let s = 0
    // let e = name.length-1

    // while (s < e) {
    //     let temp = name[s]
    //     name[s] = name[e]
    //     name[e] = temp
    //     name[s++]
    //     name[e--]
    // }
    for (let s = 0; s <= name.length-1; s++){
        for (let e = name.length-1; e >= 0; e--){
            let temp = name[s]
            name[s] = name[e]
            name[e] = temp
        }
    }
}


let getLength = (arr) => {
    let count = 0 
    for (let i = 0; i <= arr.length; i++){
        count++
    }
    return count
}

reverse('Surya')
getLength('Surya')


