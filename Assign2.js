const m = "MohanBaBlB"
console.log(pixel(m))

function pixel(m){
    const h = m.split("")
    var a = 0
    var count = 0
    while (h[a]) {
        if (h[a] === "B") {
            count += 1;
        }
        a += 1;    
    }
    return count
}