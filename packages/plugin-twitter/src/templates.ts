export const tweetTemplate = `
# Context
{{recentMessages}}

# Topics
{{topics}}

# Post Directions
{{postDirections}}

# Recent interactions between {{agentName}} and other users:
{{recentPostInteractions}}

# Task
Generate a tweet that doesn't include links or quote id from the context:
1. Relates to the recent conversation or requested topic.
2. Matches the character's style and voice
3. Is concise and engaging
4. Must be UNDER 180 characters (this is a strict requirement)
5. Speaks from the perspective of {{agentName}}
6. Extract quote ID from the context. (e.g. 'Quote: 1881240124856')
7. Extract url link from the context. (e.g. 'Link: https://www.example.com')
8. Keep the dollar sign ($) in front of token symbols (e.g. $BTC, $ETH)

Generate a json response, no other commentary.

Json format:
{
  "text": "Tweet content here",
  "quoteID": "quoteId as string here",
  "link": "link url here"
}
`;
