import React, {useState} from 'react';
import './App.css';

// Class Component
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() => this.setState({count: this.state.count + 1})}>
            Add 1
          </button>
      </div>
    );
  }
}

const INITIAL_LIST = [
  {
    id: '0',
    title: 'React with RxJS for State Management Tutorial',
    url:
      'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
  },
  {
    id: '1',
    title: 'React with Apollo and GraphQL Tutorial',
    url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
  },
];


//Functional Component
function CounterF() {

  function onRemoveItem(id) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  const [count, setCount] = useState(0);
  const [list, setList] = useState(INITIAL_LIST);

  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1) }>
  //       Click Func
  //     </button>
  //   </div>
  // );
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
          <button type="button" onClick={() => onRemoveItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="App">
     <CounterF/>
    </div>
  );
}

export default App;
