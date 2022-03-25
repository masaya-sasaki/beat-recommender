# beat-recommender

This repo is a React application that uses Spotify API to recommend a beat. 
Search songs and add them to the songlist and click on the recommendation button to receive a recommendation of the key and tempo of a beat based on the songlist.

## User Flow
First, upon launch, the app will prompt the user to authorize connecting 
to their Spotify account. 
Second, after the user has authorized the use of an account,
they can search songs and add them to a list.
Thirdly, after they have added them to the list, they can push the send button
to ask for recommendation. The system will show a recommendation of a beat 
based on the key and tempo of the songs that are submitted. 

## Design 
Frontend: React 
API: Spotify Audio Analysis API 
1. Basic Features - completed
Simple Frontend UI using React
Authentication Feature 
Search Feature 
Submit Feature 

2. Currently, only three songs can be added to the song list. 
Next step is to figure out how to add more songs to the song list
by finding out how to send multiple http requests together or dynamically - completed

3. The last step is to add more styling - completed 

4. Future Enhancements: Come up with a better algorithm that takes the song lists
and returns a recommendation of beat. 

5. An additional feature will be adding Youtube search API to pull up songs based on the recommendation. Then, another feature developing on that would be to connect a remixing app so that you can edit and remix songs based on the search.