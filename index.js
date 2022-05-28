// let name='Kamal';
// let age= 10
// let isPassword=true;
// let a=undefined;
// let b=null;

// console.log(name);
// console.log(typeof name);

// let person={
//     name:'nimasha',
//     age:20
// }
// person.name='sumalll';
// person['name']='Mamal';
// console.log(person);


// let myarray=['myitem',10,true,'good'];
// myarray[4]=60;
// console.log(myarray);
// console.log(myarray[0]);

// function myfunction(name)
// {
//     console.log('good morning'+ name);
//     console.log('good afternoon' + name);
// }

// myfunction('Kumal');
// myfunction('Sunil');

// function myfunction2(val){
//     return val+2;
// }

// myfunction2(10);

// let myButton=document.getElementById("mybtn")
// myButton.addEventListener("click",dosomething)

// function dosomething(){
//     alert("hello");
// }

let isAngry=true;
const elementId='myImage';
const angryEmoji='angry.png';
const hahaEmoji='haha.png';

function changeEmoji()
{
   
    isAngry= !isAngry;
    if(isAngry){
        document.getElementById(elementId).src=hahaEmoji;

    }else{
        document.getElementById(elementId).src=angryEmoji;

    }
}