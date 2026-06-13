import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/Card'
import axios from 'axios'
import './App.css'

function App() {

  const [userData,setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(function(){
    getdata();
  },[index])

  const getdata = async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)
    setUserData(response.data);
    console.log(response.data);
  }

  let printUserData = <h3 className='text-gray-400 text-xl font-medium my-20 w-full text-center'>Loading...</h3>;
  if(userData.length > 0){ 
    printUserData = userData.map(function(e, idx) {
      return <div key={idx}>
         <Card elem={e}></Card>
      </div>   
    })
  }


  return (
    <>
    <div className="bg-black min-h-screen text-white flex flex-col justify-between">
      <p className='w-fit mx-auto bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold rounded-full m-4 p-3 transition-colors'>Gallery Application</p>
      <div className="flex flex-wrap gap-6 justify-center items-center p-4">
          {printUserData}
      </div>
      <div className="flex justify-center items-center p-6 mt-auto bg-black/80 backdrop-blur-sm sticky bottom-0 w-full h-20">
        <button className='bg-[#1DB954] hover:bg-[#1ed760] active:scale-95 text-black font-bold m-5 p-3 rounded-full transition-colors'
        disabled={index <= 1}
        style={{opacity: index==1? 0.7:1}}
        onClick={()=>{
          if(index>1){
            setIndex(index-1);
            setUserData([]);
          }
        }}
        >
          Prev
        </button>
        <p>Page {index}</p>
        <button className='bg-[#1DB954] hover:bg-[#1ed760] active:scale-95 text-black font-bold m-5 p-3 rounded-full transition-colors'
        onClick={()=>{
          setIndex(index+1);
          setUserData([]);
        }}
        >
          Next
        </button>
      </div>
    </div>
    </>
  )
}

export default App
