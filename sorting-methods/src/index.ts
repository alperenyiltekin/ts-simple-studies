import { Sorter }               from './Sorter';
import { NumbersCollection }    from './NumbersCollection';
import { CharacterCollection }  from './CharacterCollections';
import { LinkedList }           from './LinkedList';

const numbersCollection     = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection  = new CharacterCollection('Xaayb');

// const linkedList = new LinkedList();
// linkedList.add(400);
// linkedList.add(-20);
// linkedList.add(3);
// linkedList.add(0);

numbersCollection.sort();
console.log(numbersCollection.data);


