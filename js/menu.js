class Menu{
    constructor(id){
        this.box = document.querySelector(id)
        this.ul = this.box.querySelector("ul")
        this.lis = this.box.querySelectorAll("li")
        this.subMenuElse = this.box.querySelectorAll(".sub-menu")
        this.timer1 = null
        this.timer2 = null
        this.init()
    }

    init(){
        console.log("menu")
        this.lis.forEach((item) => {
            item.addEventListener("mouseenter",(e)=>{
                let li = e.target
                console.log("mouseenter")
                if(this.timer2 != null){
                    clearTimeout(this.timer1)
                }
                this.timer1 = setTimeout(()=>{
                    this.subMenuElse.forEach((item)=>{
                        item.classList.remove("active")
                    })
                    li.children[1].classList.add("active")
                },200)
            })            
        });

        this.lis.forEach((item) => {
            item.addEventListener("mouseleave",(e)=>{
                let li = e.target
                console.log("mouseleave")
                if(this.timer2 != null){
                    clearTimeout(this.timer2)
                }
                this.timer2 = setTimeout(()=>{
                    li.children[1].classList.remove("active")
                },200)
            })            
        });
    }
}