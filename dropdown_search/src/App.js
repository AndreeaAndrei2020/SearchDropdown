
import './App.css';
import boldSubstring from './boldSubstring';
import React, { useState } from 'react';

function App() {
  const [option, setOption] = useState(['About', 'Base', 'Blog', 'Contact', 'Custom', 'Support', 'Tools', 'Toyototo', 'Toyoo', 'aToyototoa', 'oytoo', 'oyto']);
  const allOptions = ['About', 'Base', 'Blog', 'Contact', 'Custom', 'Support', 'Tools', 'Toyototo', 'Toyoo', 'aToyototoa', 'oytoo', 'oyto'];

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function filterFunction() {
    setOption([]);
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();

    if (filter === '') { setOption(allOptions); }

    else {
      for (let i = 0; i < allOptions.length; i++) {
        const txtValue = allOptions[i];
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          setOption(option => [...option, boldSubstring(txtValue, filter)]);
        }
      }
    }

  }
  return (
    <div className="App">
      <h2>Search/Filter Dropdown</h2>
      <p>Click on the button to open the dropdown menu, and use the input field to search for a specific dropdown link.</p>

      <div className="dropdown">
        <button onClick={myFunction} className="dropbtn">Dropdown</button>
        <div id="myDropdown" className="dropdown-content">
          <input type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction} />
          <div className="users">
            {option.length ? (option.map((user) => (
              <a href="/#" key={option.indexOf(user)}> {user} </a>
            ))) : null}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
