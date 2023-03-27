import {useState} from "react";
import ReactAudioPlayer from "react-audio-player";

import images from "./images"
import sounds from "./sounds";
import recipes from "./recipes/recipes.json";
import './App.scss';

function App() {
    const [people, setPeople] = useState(1);
    const [vegan, setVegan] = useState(0);
    const [pickedProduct, setPickedProduct] = useState('');

    function checkInputs(e){
        setPickedProduct(e.target.id);
        // const inputs = Array.from(document.querySelectorAll("input.app__food-input"));
    }

  return (
    <div className="app">
        <header>
            <h1 className={"app__title"}>Индекс.Шашлык</h1>
        </header>
        <div className="app__people-count">
            <label className={"app__people-count__label"} htmlFor={'people-count'}>Сколько человек будут кушать?</label>
            <br/>
            <input value={people} onChange={e=>setPeople(e.currentTarget.value-0)}
                   type="range" id={'people-count'} min={1} max={13}/>
            <br/>
            <label className={"app__people-count__label"} htmlFor={'vegan'}>Есть веганы?
                <input type="checkbox" id={'vegan'} checked={!!vegan} onChange={e=>setVegan(e.currentTarget.checked ? 1 : 0)}/>
                Они тоже люди!</label>
            <br/>
            {!!vegan &&
                <input value={vegan} onChange={e=>setVegan(e.currentTarget.value-0)} type="range" id={'vegan-count'} min={1} max={13}/>}
        </div>
        <div className="app__food">
            <h2>Что будем готовить?</h2>
                <div className="app__food-items" onChange={(e)=>checkInputs(e)}>
                    <input className="app__food-input" type="radio" id="chicken" alt={'chicken'} name={"food"}/>
                    <label className={"app__food-items__label"} htmlFor='chicken'>
                        <img className='app__food-img' src={images.chicken} id={'chicken'} alt={"chicken"}/>
                    </label>
                    <input className="app__food-input" type="radio" id="pig" alt={'pig'} name={"food"}/>
                    <label className={"app__food-items__label"} htmlFor="pig">
                        <img className='app__food-img' src={images.pig} alt="pig"/>
                    </label>
                    <input className="app__food-input" type="radio" id="beef" alt={'beef'} name={"food"}/>
                    <label className={"app__food-items__label"} htmlFor="beef">
                        <img className='app__food-img' src={images.beef} alt="beef"/>
                    </label>
                    <input className="app__food-input" type="radio" id="mutton" alt={'mutton'} name={"food"}/>
                    <label className={"app__food-items__label"} htmlFor="mutton">
                        <img className='app__food-img' src={images.mutton} alt="mutton"/>
                    </label>
                    <input className="app__food-input" type="radio" id="vegetables" alt={'vegetables'} name={"food"}/>
                    <label className={"app__food-items__label"} htmlFor="vegetables">
                        <img className='app__food-img' src={images.vegetables} alt="vegetables"/>
                    </label>
                    {pickedProduct &&
                        <ReactAudioPlayer
                            src={sounds[`${pickedProduct}`]}
                            autoPlay
                            volume={0.2}
                        />
                    }
                </div>
        </div>
        <div className={"app__recipes"}>
            <h2>Выбери рецепт:</h2>
            {pickedProduct &&
                <ul>
                    <li>
                        {recipes.chicken[0].id}
                    </li>
                    <li>{recipes.chicken[0].products}</li>
                </ul>
            }
        </div>
        <div className={"app__calculate"} onClick={()=>alert('нужно ' + people*0.5 + 'кг мяса,\n и '+ vegan*0.5 + 'кг овощей')}>Посчитать</div>
    </div>
  );
}

export default App;
