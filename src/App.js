import './index.js'
import './App.css';
import {useState} from "react"

function App() {
    
  
    const [enteredText, setEnteredText] = useState('')
    
    const [caps, setCaps] = useState('')
    
   
    const valueClickHandler = (e) => {
  
        if (caps === 'shift' && e.target.value.toUpperCase() !== e.target.value.toLowerCase()) {
            setEnteredText(enteredText + e.target.value)
            setCaps('')
        
        } else if (caps === 'capsLock' && e.target.value.toUpperCase() !== e.target.value.toLowerCase()) {
            setEnteredText(enteredText + e.target.value)
        
        } else {
            setEnteredText(enteredText + e.target.value.toLowerCase())
        }
    }

  
    const backspaceClickHandler = (e) => {
        if (enteredText.slice(-2) === '\n') {
            setEnteredText(enteredText.slice(0, -2))
        } else {
            setEnteredText(enteredText.slice(0, -1))
        }
    }

  
    const capitalizeClickHandler = (e) => {
        if (caps === '') {
            setCaps(e.target.value)
        } else {
            setCaps('')
        }
    }

    return (

<div className='keyboard-input'>
    
    
    <p class="use-keyboard-input">
        {enteredText}
    </p>
    <div className='media'>
        <div className='keyboard-base'>
        <div className = 'keyBoard-wrapper'>
        <div className = 'keyNumbers'>
        

        
        <button value={'1'} onClick={valueClickHandler}> 1 </button> 
        <button value={'2'} onClick={valueClickHandler}> 2 </button> 
        <button value={'3'} onClick={valueClickHandler}> 3 </button> 
        <button value={'4'} onClick={valueClickHandler}> 4 </button> 
        <button value={'5'} onClick={valueClickHandler}> 5 </button> 
        <button value={'6'} onClick={valueClickHandler}> 6 </button> 
        <button value={'7'} onClick={valueClickHandler}> 7 </button> 
        <button value={'8'} onClick={valueClickHandler}> 8 </button> 
        <button value={'9'} onClick={valueClickHandler}> 9 </button> 
        <button value={'0'} onClick={valueClickHandler}> 0 </button> 
        <button value={'-'} onClick={valueClickHandler}> - </button> 
        <button value={'+'} onClick={valueClickHandler}> + </button> 
        <button value={'='} onClick={valueClickHandler}> = </button> 
        <button onClick={backspaceClickHandler} className = 'span-twooo' > backspace </button>


        
        <button value={'    '} onClick={valueClickHandler} className = 'spantwo'> tab </button> 
        <button value={'Q'} onClick={valueClickHandler}> Q </button> 
        <button value={'W'} onClick={valueClickHandler}> W </button> 
        <button value={'E'} onClick={valueClickHandler}> E </button> 
        <button value={'R'} onClick={valueClickHandler}> R </button> 
        <button value={'T'} onClick={valueClickHandler}> T </button> 
        <button value={'Y'} onClick={valueClickHandler}> Y </button> 
        <button value={'U'} onClick={valueClickHandler}> U </button> 
        <button value={'I'} onClick={valueClickHandler}> I </button> 
        <button value={'O'} onClick={valueClickHandler}> O </button> 
        <button value={'P'} onClick={valueClickHandler}> P </button> 
        <button value={'['} onClick={valueClickHandler}> [ </button> 
        <button value={']'} onClick={valueClickHandler}> ] </button> 
        <button value={'\\'} onClick={valueClickHandler} className='span-twoo'> \ </button>


        {/* Notice here also I am adding a conditional className 'caps-active'. The idea is that if the user has 
        activated capsLock (or shift) we want them to know, so we change the background on the button
        when it is active. We do pretty much the same thing for shift. If the caps state is equal to capsLock, we add
        the className 'caps-active'. Otherwise, we do not add a className ('')*/}
        <button value={'capsLock'} onClick={capitalizeClickHandler} className ={'span-two ' + (caps === 'capsLock' ? 'caps-active' : '')} > caps lock </button> 
        <button value={'A'} onClick={valueClickHandler}> A </button> 
        <button value={'S'} onClick={valueClickHandler}> S </button> 
        <button value={'D'} onClick={valueClickHandler}> D </button> 
        <button value={'F'} onClick={valueClickHandler}> F </button> 
        <button value={'G'} onClick={valueClickHandler}> G </button>
        <button value={'H'} onClick={valueClickHandler}> H </button> 
        <button value={'J'} onClick={valueClickHandler}> J </button> 
        <button value={'K'} onClick={valueClickHandler}> K </button> 
        <button value={'L'} onClick={valueClickHandler}> L </button> 
        <button value={';'} onClick={valueClickHandler}> ; </button> 
        <button value={" ' "} onClick={valueClickHandler}> ' </button>
        {/* The way to add a new line in a string is \n. */}
        <button value={'\n'} onClick={valueClickHandler} className = 'span-two '> enter </button>

        <button value={'shift'} onClick={capitalizeClickHandler} className ={'span-two ' + (caps === 'shift' ? 'caps-active' : '')}> shift </button>
        <button value={'Z'} onClick={valueClickHandler}> Z </button> 
        <button value={'X'} onClick={valueClickHandler}> X </button> 
        <button value={'C'} onClick={valueClickHandler}> C </button> 
        <button value={'V'} onClick={valueClickHandler}> V </button> 
        <button value={'B'} onClick={valueClickHandler}> B </button> 
        <button value={'N'} onClick={valueClickHandler}> N </button> 
        <button value={'M'} onClick={valueClickHandler}> M </button> 
        <button value={','} onClick={valueClickHandler}> , </button> 
        <button value={'.'} onClick={valueClickHandler}> . </button>  
        <button value={'/'} onClick={valueClickHandler}> / </button> 
       


        <button value={'.com'} onClick={valueClickHandler} className = 'span-two'> .com </button> 
        <button value={'@'} onClick={valueClickHandler} className = 'at'> @ </button> 
        <button value={' '} onClick={valueClickHandler} className = 'span-fifteen'> space bar </button>



       </div> </div></div></div> </div>
    );
}

export default App;