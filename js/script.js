$(document).ready(function() {

/* Check off list items and move them to bottom of list, or uncheck to move to top of list */
	function checkUncheck() {
		$('[type="checkbox"]').on("click", function() {
			var listItem = $(this).parent();
			
			if($(this).is(':checked')) {
				$(listItem).css('text-decoration', 'line-through');
				$(listItem).appendTo('.listItems');
				console.log("Bought this item already");
			}

			else {
				$(listItem).css('text-decoration', 'none');
				$('.listItems').prepend(listItem);
				console.log("Need to buy this item");
			}
		});
	}


/* Run checkUncheck on current list items */
	checkUncheck();


/* Add item to list */
 	$('#addButton').click(function() {
 		event.preventDefault();
		var addItem = $('#newItem').val();
		
		$('.listItems').prepend('<li><input type="checkbox" class="checkItOut">'+ addItem + '</li>');
		checkUncheck();
		console.log("I'm on top!");
	});


/* Use .slideToggle for trash can icon */
/*	$('.trashItem').on("click", function() {
		var trashThis = $(this).parent();
		$(trashThis).slideToggle(400);
	});

*/


/* Delete checked items off of list */
	$('#deleteList').click(function() {
		var dialog = confirm("Are you sure you want to delete these items?");
		var deleteItem = $('input[type="checkbox"]:checked');

		if(dialog === true) {
			$(deleteItem).parent().detach();
			console.log("Testing one two three");
		}

	});




});





