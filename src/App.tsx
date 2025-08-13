import './App.css'

type HackerList = {
  title: string,
  url: string,
  author: string,
  num_comments: number,
  points: number,
  objectID: number,
}

const list: Array<HackerList> = [
  {
    title: 'React',
    url: 'https://react.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />
    </div>
  );
}

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log(addTwoNumbers(Math.random(), Math.random()));
  }

  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  }

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={(e) => handleChange(e)} />
    </div>
  );
}

const List = () => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url} target='_blank'>{item.title}</a>
            </span>
            <span> {item.author}</span>
            <span> {item.num_comments}</span>
            <span> {item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default App
