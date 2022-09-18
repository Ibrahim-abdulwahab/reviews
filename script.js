window.addEventListener('load', function(){
    const first=document.getElementById("1");
    const second=document.getElementById("2");
    const third=document.getElementById("3");
    const fourth=document.getElementById("4");
    const left=document.getElementById("left");
    const right=document.getElementById("right");
    const surprise=document.getElementById("surprise");
    const numbers=[0,1,2,3];
    let n=0;

    const nMatch=()=>{
        if (n==0){
            first.className="about"
            second.className="none";
            third.className="none";
            fourth.className="none";
        }
        else if (n==1 || n==-3){
            first.className="none"
            second.className="about";
            third.className="none";
            fourth.className="none";
        }
        else if (n==2 || n==-2){
            first.className="none"
            second.className="none";
            third.className="about";
            fourth.className="none";
        }
        else if (n==3 || n==-1){
            first.className="none"
            second.className="none";
            third.className="none";
            fourth.className="about";
        }
    }

    const nIncrease=()=>{
        n=n+1;
        if (n>3){
            n=0
        }
        nMatch()
    }
    right.addEventListener("click",nIncrease)

    const nDecrease=()=>{
        n=n-1;
        if (n<-3){
            n=0
        }
        nMatch()
    }
    left.addEventListener("click",nDecrease)

    const surpriseNumber=()=>{
        let number=numbers[Math.floor(Math.random()*numbers.length)];
        n=number;
        nMatch()
    }
    surprise.addEventListener("click",surpriseNumber)

    

    
    



    
})