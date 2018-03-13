# get-to-it
Board game like snakes and ladders but with a bit more strategy.

Technologies used until now: Angular 5, NodeJS, Express




================================== RULES ====================


Components:

	A map board with places and paths (paths have values associated with them)
	2-5 player meeples of different colors to represent player movements.
	2-5 corresponding destinations for each player.

	Cards:

	1) Number cards (to advance on the path towards your destination)
	2) Action cards


==============================================================

On your turn: (exact implementations TBD)

1) Pick a card from the deck.
2) Play the card or discard a card.
3) Put a toll on any path which the player shares on its current position and collect toll from other players who want to pass. The toll can vary depending on a person's mood or bargaining power but max can be 10/max numbered card in the game. Players can negotiate.

==============================================================

Actions: (exact implementations TBD)

	Playing a card:

	1) A player can advance towards their destination by playing the number cards equal to or more than the path cost.
	   A player can only advance one path per turn.
	2) Make yourself or another player discard all cards in their hand and get new ones.
	3) Take another player's best card and give her your worst.
	4) Ignore toll while passing a path.
	5) Take the best from top 3 action cards
	6) Kidnap and tie you down another person they are at the same location.
	7) Put construction barriers.


