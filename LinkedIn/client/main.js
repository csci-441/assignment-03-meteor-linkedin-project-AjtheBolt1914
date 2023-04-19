import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access}
        from './../imports/api/LinkedIn_posts.js';
import App from './../imports/ui/App.js';

Meteor.startup(() =>  {

  Tracker.autorun(() => {
    let allPostsInDB = UP_Collection_Access.find({},
                                              {sort: {date_added: -1}}).fetch();
    let title = 'LinkedIn';


    ReactDOM.render(<App
        passedPropTitle={title}
        passedPropAllPosts={allPostsInDB}
      />, document.getElementById('content'));
  });
});

