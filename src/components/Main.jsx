import languages from "../assets/languages"
import { useState } from "react"

const Main = ()=>{
  const [langSelected, setLangSelected] = useState(0)
  const [title, setTitle] = useState("Non hai selezionato nessun linguaggio")
  const [description, setDescript] = useState("")

  function dataUpdate(id){
    const language = languages.find((language) => language.id === id);
    setLangSelected(id)
    setTitle(language.title)
    setDescript(language.description)

  }
  return (
   <main>    
    <div className="container">
      <div className="buttonGroup">
        {languages.map((language)=>(
          <div key={language.id} className={`btn ${language.id === langSelected ? "btn-warning" : "btn-primary"}`} onClick={() => dataUpdate(language.id)}>{language.title}</div>
        ))} 
        
        <div class="card">
          <h1>{title}</h1>
          <div class="card-body">
            <p class="card-text">{description}</p>
          </div>
        </div>

      </div>
    </div>
    
   </main>
  ) 
 }
 
 export default Main