'use strict';

let x = Math.trunc(Math.random() * 20);
console.log(x);

let count=20;

let highScore=0;

//when we triggred Again then the function we wrote will restores the entire page to original format.....
document.querySelector('.again').addEventListener('click',function()
{
    count=20;
    x = Math.trunc(Math.random() * 20);
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.number').textContent="?";
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.score').textContent=count;
    document.querySelector('.guess').value=' ';
    document.querySelector('.highscore').textContent=highScore;
})

//When we triggred click it will check wether the number is correct or not and also assigned a counter variable to detrmine the score of the canidate
document.querySelector('.check').addEventListener('click',function()
{
    let res=Number(document.querySelector('.guess').value);
    if(res==0)
    {//This will display if we do not enter any thing in the input box..
        document.querySelector('.message').textContent="Enter a valid Number";
    }
    else if(res==x && count>0)
    {
        document.querySelector('.message').textContent="HURRAY!!";
        document.querySelector('.number').textContent=x;
        document.querySelector('body').style.backgroundColor="rgb(16, 230, 16)";
        document.querySelector('.number').style.width='30rem';
        if(count>highScore)
        {//This block will check for the highScore if the
            highScore=count;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
    else
    {
        if(res>x)
        {
            if(count>1)
            {
                document.querySelector('.message').textContent="Number is too High";
                count=count-1;
                document.querySelector('.score').textContent=count;
            }else
            {
                document.querySelector('.message').textContent="PLEASE RELOAD";
                document.querySelector('.score').textContent="YOU LOST!";
            }
        }
        else
        {
            if(count>1)
            {
                document.querySelector('.message').textContent="Number is too low";
                count=count-1;
                document.querySelector('.score').textContent=count;

            }
            else
            {
                document.querySelector('.message').textContent="PLEASE RELOAD.....";
                document.querySelector('.score').textContent="YOU LOST!";
            }
        }
    }


});

