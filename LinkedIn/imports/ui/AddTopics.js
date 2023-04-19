import React from 'react';
import {UP_Collection_Access} from './../api/LinkedIn_posts.js';


export default class AddTopics extends React.Component{

  processFormData(event){
    event.preventDefault()
    let newTopic = event.target.formInputNameAttribute.value;
    if (newTopic){
      event.target.formInputNameAttribute.value = '';
      UP_Collection_Access.insert({
        topic: newTopic,
        
        up_votes: 0,  
        down_votes: 0,
        date_added: new Date(), 

      });

    };
  }

  render(){
    return (
        <form onSubmit={this.processFormData.bind(this)}>
          <input type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
          <button>Add Topic</button>
        </form>
    );
  }
};
