import {Mongo} from 'meteor/mongo';

export const Topic_Replies_Collection_Access =
                        new Mongo.Collection('topic_replies_collection');


export const Calculate_rank = (passed_collection) => {
    let rank = 1;
    return passed_collection.map((reply, index) => {

      if(index !== 0 && passed_collection[index - 1].total_reply_votes > reply.total_reply_votes) {
        rank++;
      }


      return {    
        ...reply,  
        rank,     
      };
    });
};
