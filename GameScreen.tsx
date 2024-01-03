import React, {useState, useEffect} from 'react';
import {Text, View, Button, Image} from 'react-native';
import * as RNFS from 'react-native-fs';
const dataPath = RNFS.DocumentDirectoryPath + "/data/";

const WordDataRow = (word, l8n, description, prompt, image) => { return { word: word, l8n: l8n, description: description, prompt: prompt, image: image }}

async function getShuffledWordArray(language, categories) {
    var arr = [];
    /*for(let category of categories)
    {
        // TODO: Handle iOS
        var path = dataPath+category+'_'+language+'.csv';
        console.log(path);
        try {
            const response = await RNFS.readFileAssets(path);
        } catch (err) {
            console.log(err);
        }
        console.log(response);
    }*/
    arr = [...arr, new WordDataRow('duck', 'Duck', 'Ducks are birds in the family Anatidae. Ducks are closely related to swans and geese, which are in the same family.', 'Lorem Ipsum', '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')]
    arr = [...arr, new WordDataRow('notDuck', 'Not Duck', 'Not a duck', 'Derp', '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')]
    return arr;
};

type WordTitleCardProps = {
    word: string;
    description: string;
    image: string;
};

const NoOptionsWordTitleCard = (props: WordTitleCardProps) => {
const [showWord, setShowWord] = useState(true);

if(showWord) {
    return (
        <View>
            <Text>{props.word}</Text>
            <Text>{props.description}</Text>
            <Button title="FLIP" onPress={()=> setShowWord(false)}/>
        </View>
    )
}

base64DataString = 'data:image/jpg;base64,'+props.image;

return (
    <View>
        <Image style={{ width: 256, height: 256, borderWidth: 1, borderColor: 'red'}} source={{uri: base64DataString }}/>
        <Button title="FLIP" onPress={()=> setShowWord(true)}/>
    </View>

)
};

type GameOptions = {
    optionCount: int;
    categories: [];
    language: string;
}

const GameScreen = (props: GameOptions) => {
const [currentWordIndex, setCurrentWordIndex] = useState(0);
const [words, setWords] = useState([]);

//First render
useEffect(() => {
    getShuffledWordArray(props.language, props.categories).then(newWords => setWords(newWords) );
}, []);

if (Array.isArray(words) && words.length === 0) {
    return (
        <View>
            <Text>Loading</Text>
        </View>
    )
}
else if(Array.isArray(words) && words.length > 0 && props.optionCount == 1) {
    return (
        <View>
            <NoOptionsWordTitleCard word={words[currentWordIndex].l8n} description={words[currentWordIndex].description} image={words[currentWordIndex].image}/>
            <Button title="PREV" onPress={()=> setCurrentWordIndex(currentWordIndex-1)}/>
            <Button title="NEXT" onPress={()=> setCurrentWordIndex(currentWordIndex+1)}/>
        </View>
    )
}
else {
    return (
        <View>
            <Text>Nothing here</Text>
        </View>
    )
}
}

export { GameScreen, getShuffledWordArray };