import "./App.css";
import { useState } from "react";

type Story = {
  objectID: number;
  url: string;
  title: string;
  author: string;
  num_comments: number;
  points: number;
};

const stories: Story[] = [
  {
    title: "React",
    url: "https://react.dev/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("React");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={filteredStories} />
    </div>
  );
};

type SearchProps = {
  search: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = (props: SearchProps) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={props.search}
      onChange={props.onSearch}
    />
  </div>
);

type ListProps = {
  list: Story[];
};

const List = (props: ListProps) => {
  return props.list.length > 0 ? (
    <ul>
      {props.list.map((item: Story) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  ) : (
    <div>
      <em>No results found</em>
    </div>
  );
};

type ItemProps = {
  item: Story;
};

const Item = (props: ItemProps) => (
  <li>
    <span>
      <a href={props.item.url} target="_blank">
        {props.item.title}
      </a>
    </span>
    <span> {props.item.author}</span>
    <span> {props.item.num_comments}</span>
    <span> {props.item.points}</span>
  </li>
);

export default App;
