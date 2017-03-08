#jQuery Table Filtering Plugin

This is a simple jQuery plugin for realtime filtering of tabular data based on text entered into a text input field. It will filter the table rows based on matching input to a single column. Requires a specific configuration *(see usage below)* and can be customised for unique html Id's and classes *(see API below)*.

##Requirements
***
jQuery 1.11 or higher

##Installation
***

The plugin should be called after the main jQuery library.

ex.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="js/jquery.tableFilter.min.js"></script>

##Usage
***

minimal HTML configuration:

    <div id="myContainer">
	     <input id="filter" type="text">
		 <table id="filter-table">
		 	<thead>
				...
			</thead>
			<tbody>
			    <tr>
				    <td class="filter-cell">This is the column that will be ssearched</td>
					<td></td>
					<td></td>
					...
				</tr>
			</tbody>
		 </table>
	</div>

basic usage:

    $('#myContainer').tableFilter();

Options can also be passed as an object (see API):

    $('#myContainer').tableFilter({
		tableID: '#myTable', 
		filterID: 'myFilter', 
		caseSensitive: true
	});

##API
***

Option        | Default Value      | Description
------------- | ------------------ | -------------
tableID       | '#filter-table'    | This is the ID of the table to be filtered. Can be customized if you have a different ID.
filterID      | '#filter'          | This is the ID of the input that will accept the filter text. Can be customized if you have a different ID.
filterCell    | '.filter-cell'     | This is the <td> (column) that will contain the text to be filtered. Can be customized if you have a different ID.
autoFocus     | false              | if set to *true* the page will autofocus on the filterID on load
caseSensitive | false              | if set to *true* the filtering will be case sensitive
noResults     | 'no results found' | This is the message displayed when filtering returns no results (string)
columns       | null               | The plugin will determine the # of columns based on first row, If your first row has less columns than rest of table you can set column count here
