const number = document.querySelector("#number")
    const btns = document.querySelectorAll("button");
    let count =0;

   btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("dec-btn")){
            count--;
        } else if(styles.contains("inc-btn")){
            count++;
        } else{
            count=0;
        }

        if(count>0){
            number.style.color = "green";
        }

        if(count<0){
            number.style.color = "red";
        }
        if(count===0){
            number.style.color = "#222";
        }
        number.textContent = count;
    })
   })