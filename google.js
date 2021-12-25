const search = document.getElementById('search')
const si = document.querySelector('.si')
const input = document.querySelector('input')
search.addEventListener('mouseover',()=>{
    search.style.backgroundColor = 'rgb(59, 59, 59)'
    si.style.backgroundColor = 'rgb(59, 59, 59)'
    input.style.backgroundColor = 'rgb(59, 59, 59)'

})
search.addEventListener('mouseout',()=>{
   
if(input == document.activeElement){
    search.style.backgroundColor = 'rgb(59, 59, 59)'
    si.style.backgroundColor = 'rgb(59, 59, 59)'
    input.style.backgroundColor = 'rgb(59, 59, 59)'
}
else{
    search.style.backgroundColor='rgb(39,39,39)'
    si.style.backgroundColor='rgb(39,39,39)'
    input.style.backgroundColor='rgb(39,39,39)'
}
})


document.addEventListener('click',()=>{
    if(input!=document.activeElement){
        search.style.backgroundColor='rgb(39,39,39)'
si.style.backgroundColor='rgb(39,39,39)'
input.style.backgroundColor='rgb(39,39,39)'
    }
})

search.addEventListener('click',()=>{
    input.focus()
})