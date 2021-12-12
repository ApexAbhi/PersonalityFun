let data = document.querySelector('input');
let image=document.querySelector('img');
const url ='https://joeschmoe.io/api/v1/';
document.querySelector('button').addEventListener('click',()=>{
    try{
        let content=data.value;
        //console.log(content);
        data.value='';
        //data.style.background="none";
        image.src=`${url}${content}`;
    }
    catch(e){
        console.log(e);
    }
})






