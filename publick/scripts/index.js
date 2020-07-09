const root = document.getElementById('root')
console.log("all work")
const request = async () => {
    try {
        const response = await fetch('/', { method: "POST" })
        const data = await response.text() 
        console.log(response)
        console.log(data)
        root.innerHTML=data

        
    } catch (error) {
        console.log(error)
    }  
}

request();

// const request = async ()=>{
//     const req = await fetch(
//         'http://localhost:3000/',
//         {method:"GET"})
// }