import React from 'react';
import {Topic_Replies_Collection_Access} from './../api/topic_replies.js';
import PropTypes from 'prop-types';


export default class RenderReplies extends React.Component{

  render(){
    let single_item_class_name =
                `${this.props.reply_prop_obj.rank}`;
    let possible_link = this.props.reply_prop_obj.reply_topic;
    if (this.props.reply_prop_obj.reply_topic.includes('http')){
      possible_link = <a href={this.props.reply_prop_obj.reply_topic}>{this.props.reply_prop_obj.reply_topic}</a>;
    };
    return (
      <>
        <div key={this.props.reply_prop_obj._id} className={single_item_class_name}>
          <div>
            <div>
              <h3> {possible_link}</h3>
              <p>{this.props.reply_prop_obj.total_reply_votes} total vote[s] <br />
              {this.props.reply_prop_obj.reply_up_votes} up <br /> {this.props.reply_prop_obj.reply_down_votes} down
                </p> 
            </div>
            <div>
              <button onClick={() => {  
                Topic_Replies_Collection_Access.update({_id: this.props.reply_prop_obj._id},
                  {$inc: {reply_up_votes: 1, total_reply_votes: 1}})}}>+1</button>
              <button onClick={() => {
                Topic_Replies_Collection_Access.update({_id: this.props.reply_prop_obj._id},
                  {$inc: {reply_down_votes: 1, total_reply_votes: 1}})}}>-1</button>
              <button onClick={() => {
                Topic_Replies_Collection_Access.remove({_id: this.props.reply_prop_obj._id})
              }}>X</button>
            </div>

          </div>
        </div>
      </>
    );
  }
};
RenderReplies.propTypes = {
  reply_prop_obj: PropTypes.object.isRequired,
};
