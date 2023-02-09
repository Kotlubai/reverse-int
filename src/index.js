module.exports = function reverse (n) {
    if (String(n).charAt(0) == "-") { 
    return String(n).split("").reverse().join("").slice(0, -1);;
    }
    return String(n).split("").reverse().join("");  
}
