import React, {useState} from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext  = React.createContext()

function App() {
 const [theme, setTheme] = useState('red')

  return (
   <ThemeContext.Provider value={{backgroundColor: theme}}>
    Counter  
    <Counter initialCount={0} />
   Counter Hook

    <CounterHooks initialCount={4} />
    <button  onClick={()=>setTheme(prevTheme=>{
      return prevTheme ==='red'?'rgb(221,160,221)':'red'
    })}>Toggler Theme </button>
    </ThemeContext.Provider>
  )
}

export default App
 