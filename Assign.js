const m = "Mohan"
const o = "M"
console.log(pixel(m,o))

function pixel(m,o){
    const h = m.split("")
    var a = 0
    var count = 0
    while (h[a]) {
        if (h[a] === o) {
            count += 1;
        }
        a += 1;    
    }
    return count;
}
