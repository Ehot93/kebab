import {useState} from "react";
import images from './images'
import './App.scss';

function App() {
    const [people, setPeople] = useState(1);
    const [vegan, setVegan] = useState(0);

  return (
    <div className="app">
        <header>
            <h1>Calculate Kebab</h1>
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
                <div className="app__food-items">
                    <input type="checkbox" id="chicken" alt={'chicken'}/>
                    <label htmlFor='chicken'>
                        <img className='app__food-img' src={images.chicken} id={'chicken'} alt={"chicken"}/>
                    </label>
                    <input type="checkbox" id="pig" alt={'pig'}/>
                    <label htmlFor="pig">
                        <img className='app__food-img' src={images.pig} alt="pig"/>
                    </label>
                    <input type="checkbox" id="beef" alt={'beef'}/>
                    <label htmlFor="beef">
                        <img className='app__food-img' src={images.beef} alt="beef"/>
                    </label>
                    <input type="checkbox" id="mutton" alt={'mutton'}/>
                    <label htmlFor="mutton">
                        <img className='app__food-img' src={images.mutton} alt="mutton"/>
                    </label>
                    <input type="checkbox" id="vegetables" alt={'vegetables'}/>
                    <label htmlFor="vegetables">
                        <img className='app__food-img' src={images.vegetables} alt="vegetables"/>
                    </label>
                </div>
        </div>
        <div className={"app__calculate"} onClick={()=>alert('нужно ' + people*0.5 + 'кг мяса,\n и '+ vegan*0.5 + 'кг овощей')}>Посчитать</div>
    </div>
  );
}

export default App;
