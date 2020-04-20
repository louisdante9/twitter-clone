import React from 'react';

const TweetBox = ({children}) => {
  return(
    <div className="tweet-body">
      {children}
    </div>
  )
}

const Image = ({image}) => {
  return(
    <img src={image} alt="Logo" className="picture">
    </img>
  )
}

const Handle = ({handle}) => {
  return(
    <div className="handle">
      {handle}
    </div>
  )
}

const Name = ({name}) => {
  return(
    <div className="name">
      {name}
    </div>
  )
}

const Tweet = ({tweet}) => {
  return(
    <div className="tweet">
      {tweet}
    </div>
  )
}

const TweetBody = ({image, handle, name, tweet}) => {
  return(
    <TweetBox>
      <div className="inner-body">
        <Image image={image}/>
        <div className="body">
          <div className="inner-body">
            <Name name={name}/>
            <Handle handle={handle}/>
          </div>
          <Tweet tweet={tweet}/>
        </div>
      </div>
    </TweetBox>
  )
}

export default TweetBody