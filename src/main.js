

getCss.onclick=()=>{

    console.log('hi')
    const request = new XMLHttpRequest()
    request.open("GET","/style.css")

    request.onreadystatechange=()=>{
        console.log(request.readyState)
        if (request.readyState===4  && request.status===200){
            console.log(request.response)
            console.log('请求成功')
        }
    }
    request.send()

}

