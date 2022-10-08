let element = document.getElementById("submit");
let passwordElement = document.getElementById("pwd");
element.addEventListener("mouseover", function (event) {
    if(passwordElement.value.length < 16){
        if(this.classList.contains("right")){
            this.classList.remove("right");
            this.classList.add("left")
        }else if(this.classList.contains("left")){
            this.classList.remove("left");
            this.classList.add("right");
        }else{
            this.classList.remove("center");
            this.classList.add("right");
        }
    }else{
        this.classList.remove('left');
        this.classList.remove('right');
        this.classList.add('center');
    }
    
})