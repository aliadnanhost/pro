
function trron(){
	document.getElementById('imageonoof').src='lightbulb2.png';
    console.log('ooo');
}
function trroof(){
	document.getElementById('imageonoof').src='lightbulb.png';
}



let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let conut = document.getElementById('conut');
let category = document.getElementById('category');
let submit = document.getElementById('submit');

//get total
function getTotle(){
if(price.value !=''){
    let result = (+price.value + +taxes.value + +ads.value)
                 - +discount.value;
                 total.innerHTML=result; 
                 total.style.background ='#040';            
}else{

    total.innerHTML=''; 
    total.style.background ='#a00d02'; 
 }     
           

}
//create product
let datapro
if(localStorage.prodct !=null){
    datapro = JSON.parse(localStorage.prodct);
}
else{
     datapro=[];
}

submit.onclick = function(){
    let newpro = {
        title:title.value ,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        
        category:category.value,
    }
    datapro.push(newpro);
    
    localStorage.setItem('prodct', JSON.stringify(datapro))
    console.log(datapro)
}

//seva localstoreg
//clear data
//read
//conut
//delete
//search