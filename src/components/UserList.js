
import React, { useState } from "react";

const UserList = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [uname, setUname] = useState("");
  

  const handleOnChange = (event) => {
    setUname(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/search/users?q=${uname}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.items))
      .catch((error) => console.log(error));
  };

  return (
    <div className='container'>
      <h1>GitHub Search</h1>
        <label htmlFor="txt">Enter Username:</label>
        <input type="text" id='txt' value={uname} onChange={handleOnChange} />
        <button onClick={submit}>Search</button>
          {searchResults.map((u) => (
            <div className='con'>
              <div className="image">
                <img src={u.avatar_url} alt={u.login} />
              </div>
              <a href={u.html_url}>{u.login}</a>
            </div>
            
            
          ))}

    </div>
  );
};

export default UserList;
