const abc = true;

let xyz;

function bla(){
    return(abc ? "yes" : 'No')
}
console.log(bla())

if (abc === true){
    xyz = "No"
}else{
    xyz = "yes"
}
console.log(xyz)
