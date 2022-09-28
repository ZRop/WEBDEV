let a = '';
let b = '';
let sign = '';
let finish = '';

const digit = ['0', '1','2','3','4','5','6','7','8','9','.'];

const action = ['+','-','X','/'];

const out = document.querySelector('.calc-screen p');

function AllClear(){
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = AllClear;

document.querySelector('.buttons').onclick = (event)=>{
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    out.textContent = '';
    const key = event.target.textContent;
    
    if(digit.includes(key)){
        if(b === '' && sign ===''){
        a+=key;
        console.table(a,b,sign);
        out.textContent = a;
        }else if(a !== '' && b !=='' && finish){

        }else{
            b+=key;
            out.textContent = b;
        }
        console.table(a,sign,b);
    }

    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.table(a,sign,b);
        return;
    } 

    if(key === '='){
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                a = a / b;
                break;    
        }
        finish = true;
        out.textContent = a;
        console.table(a,sign,b);
    }
}