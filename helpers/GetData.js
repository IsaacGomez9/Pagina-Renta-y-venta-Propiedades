const GetData = async(URL)=>{
    let resp = await fetch(URL)
    let data = await resp.json()
    console.log(data)
    return data
}

export default GetData