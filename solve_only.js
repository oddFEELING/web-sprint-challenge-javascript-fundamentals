//=============================================>  TASK 1

function summation(num1) {
  let count = 0;
  let sum = 0;

  while (count <= num1) {
    sum = count + sum;
    count++;
  }
  console.log(sum);
}

summation(4);

//=============================================>  TASK 2 request 1
const zooAnimals = [
  {
    animal_name: 'Jackal, asiatic',
    population: 5,
    scientific_name: 'Canis aureus',
    state: 'Kentucky',
  },
  {
    animal_name: 'Screamer, southern',
    population: 1,
    scientific_name: 'Chauna torquata',
    state: 'Alabama',
  },
  {
    animal_name: 'White spoonbill',
    population: 8,
    scientific_name: 'Platalea leucordia',
    state: 'Georgia',
  },
  {
    animal_name: 'White-cheeked pintail',
    population: 1,
    scientific_name: 'Anas bahamensis',
    state: 'Oregon',
  },
  {
    animal_name: 'Black-backed jackal',
    population: 2,
    scientific_name: 'Canis mesomelas',
    state: 'Washington',
  },
  {
    animal_name: 'Brolga crane',
    population: 9,
    scientific_name: 'Grus rubicundus',
    state: 'New Mexico',
  },
  {
    animal_name: 'Common melba finch',
    population: 5,
    scientific_name: 'Pytilia melba',
    state: 'Pennsylvania',
  },
  {
    animal_name: 'Pampa gray fox',
    population: 10,
    scientific_name: 'Pseudalopex gymnocercus',
    state: 'Connecticut',
  },
  {
    animal_name: 'Hawk-eagle, crowned',
    population: 10,
    scientific_name: 'Spizaetus coronatus',
    state: 'Florida',
  },
  {
    animal_name: 'Australian pelican',
    population: 5,
    scientific_name: 'Pelecanus conspicillatus',
    state: 'West Virginia',
  },
];

function animalNames(zooAnimals) {
  let displayNames = [];

  zooAnimals &&
    zooAnimals.forEach((item) => {
      displayNames.push(
        `name: ${item.animal_name}, scientific: ${item.scientific_name}`
      );
    });

  console.log(displayNames);
}

animalNames(zooAnimals);

//=============================================>  TASK 2 request 2
function lowerCaseNames(zooAnimals) {
  let lowered = [];

  zooAnimals.map((animal) => {
    lowered.push(animal.animal_name.toLowerCase());
  });

  console.log(lowered);
}

lowerCaseNames(zooAnimals);

//=============================================>  TASK 2 request 3
function lowPopulationAnimals(zooAnimals) {
  let lowPop = [];

  zooAnimals.filter((animal) => {
    animal.population < 5 && lowPop.push(animal);
  });

  console.log(lowPop);
}

lowPopulationAnimals(zooAnimals);

//=============================================> TASK 2 request 4
function USApop(zooAnimals) {
  const reduced = zooAnimals.reduce(
    (a, b) => a + b.population,
    zooAnimals[0].population
  );

  console.log(reduced);
}

USApop(zooAnimals);

//=============================================>  CALLBACKS
function consume(a, b, callBack) {
  callBack(a, b);
}

//=============================================>  CALLBACK STEP 2
function add(a, b) {
  console.log(a + b);
}

function multiply(a, b) {
  console.log(a * b);
}

function greeting(a, b) {
  console.log(`Hello ${a} ${b}, nice to meet you!`);
}

//=============================================>  TOPIC 3 step 1

const argObj = { length: 40, width: 20, height: 60 };

function CuboidMaker(argObj) {
  const Obj = {
    length: argObj.length,
    width: argObj.width,
    height: argObj.height,
    volume: () => Obj.length * Obj.width * Obj.height,
  };

  console.log(Obj);
}
