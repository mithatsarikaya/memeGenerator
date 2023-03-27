import React from "react"
import Header from "./Header"

//https://api.imgflip.com/get_memes

export default function App(){
  
  const [meme, setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImageUrl:"http://i.imgflip.com/1bij.jpg"
  })


  const [memeImg, setMemeImg] = React.useState()

  function handleChange(e){
    setMeme(prevMeme=> {
      return {...prevMeme,
         [e.target.name] : e.target.value
        }
    })
  }

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setMemeImg(data.data.memes))
  }, [])    
  
  function handleClick(){
    
    let randomNumber = Math.floor(Math.random()*meme.length)
    
  }
  

  console.log("what");
  return (
    <>
    <Header />
    <main>
      <div className="form">
        <input placeholder="TopText" onChange={handleChange}  name="topText" type="text" className="topText text" />
        <input placeholder="BottomText" onChange={handleChange} name="bottomText" type="text" className="bottomText text" />
        <button onClick={handleClick} className="form--button">Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img className="meme--image" src={meme.randomImageUrl} alt="" srcset="" />
        <h1 className="meme--text top" >{meme.topText}</h1>
        <h1 className="meme--text bottom">{meme.bottomText}</h1>
      </div>
    </main>
    </>
  )
}