$(document).ready(function() {


/* Don't allow spaces at beginning of form field */
	window.onload = function () {
    	var space = document.getElementById("newItem");
    	space.addEventListener("keydown", function (e) {
        	if (e.keyCode == 32 && this.value.length==0) {
            	e.preventDefault();
        	}
    	});
	}


/* Check off list items and move them to bottom of list, or uncheck to move to top of list */
	function checkUncheck() {
		$('[type="checkbox"]').on("click", function() {
			var listItem = $(this).parent();
			
			if($(this).is(':checked')) {
				$(listItem).css('text-decoration', 'line-through');
				$(listItem).appendTo('ul');
				console.log("Bought this item already");
			}

			else {
				$(listItem).css('text-decoration', 'none');
				$('ul').prepend(listItem);
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
		
		$('ul').prepend('<li><input type="checkbox" class="checkItOut"><img class="trashItem" src="img/trashcan.png" alt="trash icon delete" />'+ addItem + '</li>');
		checkUncheck();
		$('#shoppingList')[0].reset();
		console.log("I've been added!");
	});



/* Use .slideToggle for trash can icon */
	$('ul#sortable').on('click', '.trashItem', function() {
		var trashThis = $(this).parent();
		$(trashThis).slideToggle(400);
		console.log("Delete me");
	});



/* Delete checked items off of list */
	$('#deleteList').click(function() {
		var dialog = confirm("Are you sure you want to delete these items?");
		var deleteItem = $('input[type="checkbox"]:checked');

		if(dialog === true) {
			$(deleteItem).parent().detach();
			console.log("Testing one two three");
		}

	});


/* Make list items sortable */
    	$('#sortable').sortable();





});





