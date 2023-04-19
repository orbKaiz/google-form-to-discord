function onSubmit(resolve) {
  let discordWebhook = ''                                 // NEED TO CHANGE. Paste here your discord webhook.
  let discordEmbed = {
    embeds: [{
      title: 'New answer in form',                        // CAN CHANGE IT. Title of Embed. I usually change this to the name of the form for further ease of use.
      description: 'Answers on questions:',               // CAN CHANGE IT. Just the text under title.
      type: 'rich',                                       // DO NOT CHANGE.
      color: 0,                                           // CAN CHANGE IT. Color of Embed (default: black). List of colors: https://gist.github.com/thomasbnt/b6f455e2c7d743b796917fa3c205f812 (you need to use INT value).
      fields: [],                                         // DO NOT CHANGE. Fields are generating automatic with question and answers.
      // footer: {                                        // Uncommit this block if you want to place any information at the very bottom of the embed.
      //     'icon_url': 'paste_url_here',                // CAN CHANGE IT. Link to image.
      //     'text': 'string_with_text',                  // CAN CHANGE IT. Text to be displayed to the right of the image in the link above.
      // },
    }]
  }

  resolve.response.getItemResponses().forEach(function(comeback) {
    let val = comeback.getResponse() || 'None'
    discord_embed.embeds[0].fields.push({ name: comeback.getItem().getTitle(), value: val })
  })

  UrlFetchApp.fetch(discordWebhook, {
    method: 'post',
    payload: JSON.stringify(discordEmbed),
    contentType: 'application/json'
  })
}
