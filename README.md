#Droppabilly
Barebone droppable using jQuery

Good for Draggabilly, yo. (draggabilly.desandro.com)


##Dependencies
- jQuery (tested with 1.9.1+)
- Draggabilly (1.0.1+)

##License
MIT License (http://opensource.org/licenses/MIT)

##Parameters
All available parameters below, put in the form of sample code. Enjoy!

	$('#drop').droppabilly({
		
		//--------------------
		// any jquery selection
		//--------------------
		dragsters: '#selector',

		//--------------------
		// function is invoked when element is over the droppabilly
		// drop is the droppabilly element
		// drag is the current draggabilly element
		//--------------------
		over: function(drop, drag) {
			//put some code here!	
		},
		
		//--------------------
		// function is invoked when element moves out of the droppabilly
		// drop is the droppabilly element
		// drag is the current draggabilly element
		//--------------------
		out: function(drop, drag) {
			//put some code here!
		},

		//--------------------
		// function is invoked when element is dropped on the droppabilly
		// drop is the droppabilly element
		// drag is the current draggabilly element
		//--------------------
		drop: function(drop, drag) {
			//put some code here!
		}
	});
