import React from "react";

function ResultComponent(props) {
  //var list = props.array;
  var listItems = props.searchResult.map((list) =>
  <li key= {list.id}>{list.name}</li>);
  return <ul>{listItems}</ul>
}

export default ResultComponent;
