import React, { Fragment } from 'react';
import TweetBody from './tweet'

function Feed({ image, handle, name, tweet }) {
    return (
        <Fragment  >
            <TweetBody
                name={name}
                handle={handle}
                tweet={tweet}
                image={image} />
        </Fragment>
    );
}

export default Feed;