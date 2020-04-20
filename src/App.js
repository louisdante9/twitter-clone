import React, { useState, useEffect, Fragment } from 'react';
import { PullToRefresh, PullDownContent, ReleaseContent, RefreshContent } from "react-js-pull-to-refresh";
import Feed from './tweeter-feed/feed';
import './App.css';

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUser()
  }, [])

  const handleRefresh = () => {
    return new Promise((resolve) => {
      getUser()
    });
  }
  const getUser = () => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Request failed.');
      })
      .then(data => {
        setUser(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }


  return (

    <PullToRefresh
      pullDownContent={<PullDownContent />}
      releaseContent={<ReleaseContent />}
      refreshContent={<RefreshContent />}
      pullDownThreshold={200}
      onRefresh={handleRefresh}
      triggerHeight={100}
      backgroundColor="white"
    >
      <div className="main-body">
        {console.log(users)}
        {users.map((user, index) => {
          let name = `${user.name.first} ${user.name.last}`
          let handle = `@${user.name.first}${user.name.last}`
          let image = user.picture.medium
          let tweet = `Lorem ipsum dolor sit amet 
                        consectetur, adipisicing elit. Provident error quos atque nostrum tempora, 
                        officiis nam accusantium. Explicabo dolorem officia 
                        sint ratione repellendus optio, sit, asperiores aliquid iusto, delectus repellat.`
          return (
            <Feed
              key={index}
              name={name}
              handle={handle}
              tweet={tweet}
              image={image} />
          )
        })}
      </div>
    </PullToRefresh >
  );
}

export default App;
