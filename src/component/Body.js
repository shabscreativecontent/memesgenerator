import '../App.css'
import React from 'react'
import View from './View'
// import data from '../data/memosData'

function Body(){
   let [memoView, setMomoView] = React.useState({
      topText: '',
      bottomText: '',
      randomImage: ``
   })

   function handleChange(e){
      const {name, value} = e.target

      setMomoView(prevState => {
         return {
            ...prevState,
            [name]: value
         }
      })
   }

   let [allMemes, setAllMemes] = React.useState({})

   React.useEffect(()=>{
      // fetch('https://api.imgflip.com/get_memes')
      // .then(res => res.json())
      // .then(data => setAllMemes(data))

      const memesData = async ()=>{
         const res =  await fetch('https://api.imgflip.com/get_memes')
         const data = await res.json()
         setAllMemes(data)
      }

      memesData()
   }, [])

   // console.log(allMemes);

   function getMemoImg(){
      const memeData = allMemes.data.memes
      const numOfMemoData = memeData.length

      const randomNum = Math.floor(Math.random() * numOfMemoData).toString()
      // console.log(randomNum);
      const randomImg = memeData[randomNum].url
      // console.log(`url: ${randomImg}`);
      setMomoView(preState => ({
         topText: '',
         bottomText: '',
         randomImage: randomImg
      }))
   }

   return(
      <div className='container'>
         <div className='form'>
         <div className='inputContainer'>
            <div className='inputCard'>
               <label htmlFor='topText'>Top Text</label>
               <input 
               id='topText' 
               type='text'
               name='topText'
               value={memoView.topText}
               onChange={handleChange} 
               />
            </div>
            <div className='inputCard'>
               <label htmlFor='buttonText'>Button Text</label>
               <input 
               id='buttonText' 
               type='text'
               name='bottomText'
               value={memoView.bottomText}
               onChange={handleChange} 
               />
            </div>
         </div>

         <input type='submit' value='GetANewMemoImage'  onClick={getMemoImg} />
        </div>

        <div className='image-container'>
        {memoView.randomImage && <View img={memoView.randomImage} />}

         <h1 className='top-text'>{memoView.topText}</h1>
         <h1 className='bottom-text'>{memoView.bottomText}</h1>
        </div>
      </div>
   )
}

export default Body