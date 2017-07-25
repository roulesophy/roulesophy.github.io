(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
    	
      results = results.sort(compare);	
    	
      var appendString = '<div class="posts">';
      
      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<article class="post">'
        appendString += '<div style="margin: 15px 0 0 0;color: grey">' + item.date + '</div>';
        appendString += '<a href="' + item.url + '"><h1 style="margin: 5px 0 15px;">' + item.title + '</h1></a>';
        appendString += '<div class="entry"><p>' + item.excerpt + '</p></div>';
        appendString += '<a href="' + item.url + '" class="read-more">Read More...</a>';
        appendString += '</article>';
      }
      appendString += '</div>';

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<h1 style="margin: 5px 0 15px;">No results found</h1>';
    }
  }
  
  function compare(a, b) {
	  var itema = store[a.ref];
	  var itemb = store[b.ref];
	  if (itema.filename > itemb.filename) {
	    return -1;
	  }
	  if (itema.filename < itemb.filename) {
	    return 1;
	  }
	  return 0;
	}


  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');
  var searchTagTerm = getQueryVariable('tag');

  if (searchTerm || searchTagTerm) {
	  if (searchTerm) {
		  document.getElementById('search-box').setAttribute("value", searchTerm);
	  }

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('content');
      this.field('excerpt');
      this.field('date');
      this.field('filename');
      this.field('tags');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'content': window.store[key].content,
        'excerpt': window.store[key].excerpt,
        'date': window.store[key].date,
        'filename': window.store[key].filename,
        'tags': window.store[key].tags
      });

      var results = searchTerm ? idx.search(searchTerm) : idx.search(searchTagTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();