import React from "react";
import ResultComponent from './results';

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // State holds the entered text in the text box
      textBoxValue : '',
      searchResult : []
    }
  }

  // On the change of the text stores the updated value
  currentUserName(event){
    this.setState({
        textBoxValue : event.target.value
    });
  }

  // Gets the text box value and alerts it
  showData(){
    alert('Entered userName is: '+ this.state.textBoxValue);
  }

  // Fetches the result from the github repository
  fetchGitHubResults(){
    var resultantUrl = 'https://api.github.com/users/' + this.state.textBoxValue + "/repos";
    fetch(resultantUrl)
      .then(response => response.json())
      .then(response => { this.setState({ searchResult: response }) });
  }

  render() {
    return (
      <div className="myDiv">
        <input type="text" id="searchField" onChange={this.currentUserName.bind(this)}/>
        <input type="button" value="Search" onClick={this.fetchGitHubResults.bind(this)} />
        <ResultComponent searchResult={this.state.searchResult} />
      </div>
    );
  }
}

export default SearchComponent;

