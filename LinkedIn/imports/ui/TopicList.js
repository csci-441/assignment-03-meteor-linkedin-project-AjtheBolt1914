import React from 'react';
import RenderPost from './RenderPost.js';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import {Topic_Replies_Collection_Access, Calculate_rank}
                        from './../api/topic_replies.js';

export default class TopicList extends React.Component {
  renderAllPosts(){
    if (this.props.passed_posts.length === 0){
      return (
        <div className = 'single-block-item-style'>
          <p className = 'single-block-item-style__message'>
              Add a new topic to get started
          </p>
        </div>
      );
    } else {
      return this.props.passed_posts.map((post) => {
        let Single_Topic_Replies =
            Topic_Replies_Collection_Access.find({post_id: post._id},
                                      {sort: {total_reply_votes: -1}}).fetch();
        let positioned_replies = Calculate_rank(Single_Topic_Replies);
        return <RenderPost key={post._id} post_prop_obj={post}
                           reply_prop_array={positioned_replies}/>
      });
    }

  }
  render(){
    return (
      <>
        <FlipMove delay={500}
                  leaveAnimation='accordionVertical'
                  maintainContainerHeight={true} >
          {this.renderAllPosts()}
        </FlipMove>
      </>
    )
  }

};

TopicList.propTypes ={
  passed_posts: PropTypes.array.isRequired,
};
