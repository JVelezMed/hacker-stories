import './App.css'

type ListItem = {
  title: string,
  url: string,
  author: string,
  num_comments: number,
  points: number,
  objectID: number,
}

const list: Array<ListItem> = [
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

      <List list={list} />
    </div>
  );
}

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  }

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={(e) => handleChange(e)} />
    </div>
  );
}

const List = (props) => {
  return (
    <ul>
      {props.list.map((item: ListItem) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
}

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url} target='_blank'>{props.item.title}</a>
    </span>
    <span> {props.item.author}</span>
    <span> {props.item.num_comments}</span>
    <span> {props.item.points}</span>
  </li>
);

export default App
