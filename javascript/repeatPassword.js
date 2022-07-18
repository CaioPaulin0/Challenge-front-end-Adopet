
export default function Password(s1,s2){
    const p1 = document.getElementById(s1).value
    const p2 = document.getElementById(s2).value

    if(p2 != p1){
        alert('senha errada')
    } else{
        return p1
    }
}