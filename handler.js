'use strict';

const emojis = ['😀','😄','😁','😆','🥳','👏','🔥','🪐','🥇'];
//lambda is stateless: not save the state of this function
//event: is the trigger event that launchs this function (https request, s3 request, etc)
module.exports.rankly = async (event) => {

  const rank = event.rawQueryString.rank; //param in query url
  const rankEmoji = emojis[rank >= emojis.length ? emojis.length - 1 : rank];

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        //input: event,
        emoji: rankEmoji
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
