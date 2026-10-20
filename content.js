const images=document.querySelectorAll("img")
const new_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtz9CtrogmXsW4r4Jid9tPl0d8MKd-LYsGzkhUEElCdA&s=10"
images.forEach((img)=>{
    img.src=new_url
})