import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const ExampleOne = props => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const [age, setAge] = useState(42);

  const [fruit, setFruit] = useState("banana");

  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

const mapStateToProps = ({ home }) => ({
  data: home.data
});

export default connect(mapStateToProps)(ExampleOne);
