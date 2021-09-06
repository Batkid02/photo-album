var pics=["https://tse3.mm.bing.net/th?id=OIP.syKDtxWGzzkqfVLTDzlmIQHaEz&pid=Api&P=0&w=264&h=172",
"https://s3.envato.com/files/116476246/Cartoon%20Grandma.jpg",
"https://www.nicepng.com/png/detail/90-905390_dad-cartoon-dad-png.png",
"http://clipartmag.com/images/cartoon-mom-clipart-20.jpg",
"https://webstockreview.net/images/boys-clipart-animated-16.jpg"];
var members=["Apopa","Ona","Acha","Momma","Neel"];
var i =0;
function update(){
document.getElementById("pictures").src=pics[i];
document.getElementById("name").innerHTML=members[i];
if(i<4){
    i++;
}
else{
i=0

}

}