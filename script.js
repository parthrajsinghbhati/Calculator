var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');

for(item of btn){
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;

        if(btntext =='×')
        {
            btntext= '*';
        }

        if(btntext=='÷')
        {
            btntext='/';
        }
        screen.value+=btntext;
    });
}

function clearScreen() 
{
    screen.value = '';
}

function calculate() 
{
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}

function percent()
{
    screen.value = parseFloat(screen.value) / 100;
}
function sin()
{
    screen.value=Math.sin(screen.value);
}

function cos()
{
    screen.value=Math.cos(screen.value);
}

function tan()
{
    screen.value=Math.tan(screen.value);
}

function pow()
{
    screen.value=Math.pow(parseFloat(screen.value), 2);
}

function sqrt()
{
    screen.value=Math.sqrt(parseFloat(screen.value));
}

function log()
{
    screen.value=Math.log(screen.value);
}

function pi()
{
    screen.value += Math.PI;
}

function e()
{
    screen.value=2.71828182846;
}

function fact()
{
    let num = parseInt(screen.value);
    if (num < 0) {
        screen.value = "Error";
        return;
    }
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    screen.value = f;
}

function backspc()
{
    screen.value = screen.value.slice(0, -1);
}