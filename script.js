const addbtn =  document.querySelector("#add") 

const main = document.querySelector(".main")


addbtn.addEventListener(
    "click" , () => {
    addNote();
})



function saveNote(){
    const notes = document.querySelectorAll(".note textarea");
    const data = []
    notes.forEach(
        (note) => {
            data.push(note.value)
        } 
    )
    if(data.length === 0 ){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes" , JSON.stringify(data))
    }
    // console.log(data)
 }


const addNote = (text = "") => {

    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    
    <div class="tool">
       <button type="button" id="save" ><i class="fa-solid fa-floppy-disk"></i> SEVE</button>
      <button type="button" id="del" "> <i class="fa-solid fa-trash"></i> DEL</button>
            </div>
            <textarea >${text}</textarea>
    `

    note.querySelector("#del").addEventListener( "click" , function(){
        note.remove()
        saveNote()
    } )

    note.querySelector("#save").addEventListener( "click" , function(){
        saveNote()
    })
    note.querySelector("textarea").addEventListener("focusout" , function(){
        saveNote()
    })

    main.appendChild(note) 
    saveNote()

}


(
    function (){
        const lsNote  = JSON.parse(localStorage.getItem("notes"))
        
        if(lsNote === null ){
            addNote()
        }else{
            lsNote.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }


        console.log(lsNote)
    } 
)()
