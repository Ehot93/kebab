import {useState, useEffect, useRef} from "react";
import ReactAudioPlayer from 'react-audio-player';

import images from './images'
import sounds from "./sounds";
import './App.scss';

function App() {
    const [people, setPeople] = useState(1);
    const [vegan, setVegan] = useState(0);
    // const [inputs, setInputs] = useState([]);
    const pickedProduct = useRef([]);
    const temp = [];

    function checkInputs(){
        const inputs = Array.from(document.querySelectorAll("input.app__food-input"));
        // setInputs(Array.from(document.querySelectorAll("input.app_food-input")));
        pickedProduct.current = inputs.map(i => i.checked && i.id);
        inputs.map(i=>i.checked ? temp.push(i.id) : '');
        // console.log(pickedProduct);
        voice();
        return temp[temp.length-1];
    }

    function voice() {
        let temp = [];
        pickedProduct.current.map(i=>!!i && temp.push(i));
        console.log(pickedProduct.current, temp)

    }

  return (
    <div className="app">
        <header>
            <h1>Индекс.Шашлык</h1>
        </header>
        <div className="app__people-count">
            <label htmlFor={'people-count'}>Сколько человек будут кушать?</label>
            <br/>
            <input value={people} onChange={e=>setPeople(e.currentTarget.value-0)}
                   type="range" id={'people-count'} min={1} max={13}/>
            <br/>
            <label htmlFor={'vegan'}>Есть веганы?
                <input type="checkbox" id={'vegan'} checked={!!vegan} onChange={e=>setVegan(e.currentTarget.checked ? 1 : 0)}/>
                Они тоже люди!</label>
            <br/>
            {!!vegan &&
                <input value={vegan} onChange={e=>setVegan(e.currentTarget.value-0)} type="range" id={'vegan-count'} min={1} max={13}/>}
        </div>
        <div className="app__food">
            <h2>Что будем готовить?</h2>
                <div className="app__food-items" onChange={()=>checkInputs()}>
                    <input className="app__food-input" type="checkbox" id="chicken" alt={'chicken'}/>
                    <label htmlFor='chicken'>
                        <img className='app__food-img' src={images.chicken} id={'chicken'} alt={"chicken"}/>
                    </label>
                    <input className="app__food-input" type="checkbox" id="pig" alt={'pig'}/>
                    <label htmlFor="pig">
                        <img className='app__food-img' src={images.pig} alt="pig"/>
                    </label>
                    <input className="app__food-input" type="checkbox" id="beef" alt={'beef'}/>
                    <label htmlFor="beef">
                        <img className='app__food-img' src={images.beef} alt="beef"/>
                    </label>
                    <input className="app__food-input" type="checkbox" id="mutton" alt={'mutton'}/>
                    <label htmlFor="mutton">
                        <img className='app__food-img' src={images.mutton} alt="mutton"/>
                    </label>
                    <input className="app__food-input" type="checkbox" id="vegetables" alt={'vegetables'}/>
                    <label htmlFor="vegetables">
                        <img className='app__food-img' src={images.vegetables} alt="vegetables"/>
                    </label>
                    <ReactAudioPlayer
                        src={sounds.pig}
                        autoPlay={false}
                        volume={0.2}
                    ></ReactAudioPlayer>
                </div>
        </div>
        <div className={"app__calculate"} onClick={()=>alert('нужно ' + people*0.5 + 'кг мяса,\n и '+ vegan*0.5 + 'кг овощей')}>Посчитать</div>
    </div>
  );
}

export default App;
