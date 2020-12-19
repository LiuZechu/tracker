addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  // return new Response(request.cf.country, {
  //   headers: { 'content-type': 'text/plain' },
  // })

    if (request.headers.get("User-Agent").includes("curl")) {
      const redirectUrl = "https://developers.cloudflare.com/workers/about/"
      const statusCode = 301
      return Response.redirect(redirectUrl, statusCode)
    } else {
      var country = undefined;
      if (request.cf !== undefined) {
        country = request.cf.country;
      }

      if (country === undefined) {
        country = "general";
      }
      
      const URL = `https://trackers.ninja/home/${country}`
  
      // URL is set up to respond with dummy HTML
      let response = await fetch(URL, request)
    
      // Make the headers mutable by re-constructing the Response.
      response = new Response(response.body, response)
      response.headers.set("Foo", "Bar")
      return response
    }

}
