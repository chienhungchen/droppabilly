#Droppabilly
Barebone droppable using jQuery

Good for Draggabilly, yo. (draggabilly.desandro.com)


##Dependencies
- jQuery (tested with 1.9.1+)
- Draggabilly (1.0.1+)

##Parameters

	$('#drop').droppabilly({
		dragsters: '#selector', //any jquery selection
		over: function(drop, drag) {
			//function is invoked when element is over the droppabilly
			//drop is the droppabilly element
			//drag is the current draggabilly element
		},
		out: function(drop, drag) {
			//function is invoked when element moves out of the droppabilly
			//drop is the droppabilly element
			//drag is the current draggabilly element
		},
		drop: function(drop, drag) {
			//function is invoked when element is dropped on the droppabilly
			//drop is the droppabilly element
			//drag is the current draggabilly element
		}
	});
