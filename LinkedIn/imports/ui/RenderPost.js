import React from 'react';
import {UP_Collection_Access} from './../api/LinkedIn_posts.js';
import PropTypes from 'prop-types';
import {Topic_Replies_Collection_Access} from './../api/topic_replies.js';
import AddReplies from './AddReplies.js';
import ReplyList from './ReplyList.js';


export default class RenderPost extends React.Component{

  render(){
    let single_item_class_name =
                `${this.props.post_prop_obj.rank}`;
    let possible_link = this.props.post_prop_obj.topic;
    if (this.props.post_prop_obj.topic.includes('http')){
      possible_link = <a href={this.props.post_prop_obj.topic}>{this.props.post_prop_obj.topic}</a>;
    };

    return (
      <>
        <div key={this.props.post_prop_obj._id} className={single_item_class_name}>
          <div>
            <div>
              <p>
                {this.props.post_prop_obj.up_votes} up vote[s] <br />{this.props.post_prop_obj.down_votes} down vote[s]
              </p> {''}
              <h3> {possible_link}</h3>

            </div>
            <div>
              <button onClick={() => {
                UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                  {$inc: {up_votes: 1}})}}>+1</button>
              <button onClick={() => {
                UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                  {$inc: {down_votes: +1}})}}>-1</button>
              <button onClick={() => {
                UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
                this.props.reply_prop_array.map((reply) => {
                  Topic_Replies_Collection_Access.remove({_id: reply._id})
                });

              }}>X</button><br /><br /><br />
            </div>
          </div>
{}
          <AddReplies post_id={this.props.post_prop_obj._id}/>
          <ReplyList passed_reply_props={this.props.reply_prop_array}/>
        </div>
      </>
    );
  }
};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};
