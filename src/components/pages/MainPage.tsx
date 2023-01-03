import React, {useState} from 'react';
import {cataclysm, professions} from "../Db/db";
import PopUpNameInput from "./popUps/PopUpNameInput";
const MainPage = () => {
    const [userNumber, setUserNumber] = useState(0);
    const [users, setUsers] = useState<Person[]>([]);
    const [startGame, setStartGame] = useState(false);
    type Person = {
        age: number;
        name: string;
        male: string;
    }

    const getRandom = (min: number, max: number): number => {
        return Math.floor(Math.random() * max) + min
    }
    const Vasya: Person = {
        age: getRandom(4, 27),
        name: 'Vasya',
        male: 'male'
    }
    const StartGame = () => {
        setStartGame(true);
        const cataclysmNumber = getRandom(0, cataclysm.length);
        createPerson(userNumber);

    }
    const createPerson = (userNumber: number) => {
        for (let i = 0; i < userNumber; i++) {

        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserNumber(+e.target.value)
    }
    return (
        <div>
            <input type="number" onChange={e => handleChange(e)} value={userNumber}/>
            <button onClick={StartGame}>Start Game</button>
            {startGame && <PopUpNameInput userNumber={userNumber} usersList={users} setUsers={setUsers}/>}
        </div>
    );
};

export default MainPage;