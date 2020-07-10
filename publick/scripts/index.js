const root = document.getElementById('root')
    console.log("all work")
const request = async () => {
    try {
        const response = await fetch('/', { method: "POST" })
        const data = await response.text() 
        root.innerHTML=data
    } catch (error) {
    }  
}

request();

