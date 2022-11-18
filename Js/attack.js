// Builds the table for the results of the known plaintext attack.
function buildTable(matches)
{
  var matchesHtml = "", i = 0;

  matches.forEach(match => {
    // Filter out m=1, b=0 since that key does no transformation.
    if (match[1] != 1 || match[2] != 0)
    {
      i++;
      matchesHtml += "<tr>\
        <td>" + match[0] + "</td>\
        <td>" + match[1] + "</td>\
        <td>" + match[2] + "</td>\
      </tr>";
    }
  });

  if (i === 0)
  {
    $("#keyword-table").html("<p class=\"text-center\">No matches found</p>");
    return;
  }

  $("#keyword-table").html("<table class=\"table mt-20\">\
    <thead>\
      <tr>\
        <th>Ciphertext Keyword</th>\
        <th>Multiplicative Key</th>\
        <th>Additive Key</th>\
      </tr>\
    </thead>\
    <tbody>" + matchesHtml +
    "</tbody>\
  </table>");
}
