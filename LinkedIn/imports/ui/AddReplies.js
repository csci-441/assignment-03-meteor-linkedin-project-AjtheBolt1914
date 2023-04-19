import React from 'react';Topic_Replies_Collection_Access
import {Topic_Replies_Collection_Access} from './../api/topic_replies.js';

export default class AddReplies extends React.Component{

  processTopicReply(event){
    event.preventDefault()
    let newReply = event.target.formInputReplyAttribute.value;
    console.log(newReply);
    if (newReply){
      event.target.formInputReplyAttribute.value = '';
      Topic_Replies_Collection_Access.insert({
        reply_topic: newReply,
        reply_up_votes: 0,
        reply_down_votes: 0,
        total_reply_votes: 0,
				post_id: this.props.post_id
      });

    };
  }

  render(){
    return (
        <form onSubmit={this.processTopicReply.bind(this)}>
          <input type='text'
                 name='formInputReplyAttribute'
                placeholder='Witty reply'/>
          <button>Add Reply</button>
        </form>
    );
  }
};
