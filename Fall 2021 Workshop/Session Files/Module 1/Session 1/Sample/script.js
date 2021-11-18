function myFunction(){
    x= document.getElementById('text').innerHTML
    if (x=='Some Text'){
    document.getElementById('text').innerHTML = 'Text Changed!'
    }
    else{
        document.getElementById('text').innerHTML = 'Some Text'
    }
}
