(function($){
    "use strict";
    $.fn.tableFilter = function(options) {
	
    var settings = $.extend({
		tableID: '#filter-table',
		filterID: '#filter',
		filterCell: '.filter-cell',
		autofocus: false,
		caseSensitive: true,
		noresults: 'no results found',
		columns: null
	}, options);
		
		//auto focus on filter element if autofocs set to true
		if(settings.autofocus) {
			$(settings.filterID).focus();
		}
		
		var rowCount = $(settings.filterCell).parent().length;
		if(settings.columns === null) {
			settings.columns = $(settings.tableID + ' > tbody > tr:first >td').length;
		}
		
		if(settings.caseSensitive) {
			//create custom "icontains" selector for case insensitive search
			$.expr[':'].icontains = $.expr.createPseudo(function(text) {
			    return function(e) {
			        return $(e).text().toUpperCase().indexOf(text.toUpperCase()) >= 0;
			    };
			});
		}
		
		return this.find(settings.filterID).on("change paste keyup", function() {
			//get value of input
			var filterString = $(this).val();
		
			//for each student name compare versus filter input
			$(settings.filterCell).each(function(i){ //pass i as iterator
				if($(this).is(':icontains(' + filterString + ')')) {
					//check hidden rows for backspace operation
					if($(this).is(':hidden')) {
						$(this).parent().removeClass('filter-hidden').show();
					}
				} else {
					$(this).parent().addClass('filter-hidden').hide();
				}
				//check if .each() iterations complete
				if(rowCount === (i + 1)) {
					//find rows with 'hidden' class and compare to row count if equal then display 'no results found' message
					var hidden = $(settings.tableID).find('.filter-hidden').length;
					if (hidden === rowCount) {
						if ($('#noResults').is(':visible')) {
							return; //do not display multiple "no results" messages
						}
						var newRow = $('<tr id="noResults"><td colspan="' + settings.columns +'"><em>' + settings.noresults + '</em></td></tr>').hide(); //row can be styled with CSS
						$(settings.tableID).append(newRow);
						newRow.show();
					} else if ($('#noResults').is(':visible')) { 
						$('#noResults').remove();
					} 
				}
			}); 
		});
	};
}(jQuery));
