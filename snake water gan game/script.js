console.log("hellow this is snake water gun game")
let user=prompt("Enter S, W, G")
let cpuu=Math.floor(Math.random()*3);
let cpu=["S" ,"W" ,"G"][cpuu]
const match=(cpu,user)=>
{
    if (cpu===user) {
        return "nobody is winner"
        
    }
    else if(cpu==="S"&& user==="W")
    {
        return cpu
    }
    else if(cpu==="S"&& user==="G")
    {
        return user
    }
    else if(cpu==="W"&& user==="S")
    {
        return user
    }
    else if(cpu==="W"&& user==="G")
    {
        return cpu
    }
    else if(cpu==="G"&& user==="S")
    {
        return cpu
    }
    else if(cpu==="G"&& user==="W")
    {
        return user
    }
}
let result=match(cpu,user)
document.write(`CPU:${cpu} <br> USER:${user} <br>The winner is : ${result}`)  
              