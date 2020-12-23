addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

    if (request.headers.get("User-Agent").includes("curl")) {
      const redirectUrl = "https://developers.cloudflare.com/workers/about/"
      const statusCode = 301
      return Response.redirect(redirectUrl, statusCode)
    } else {

      const availableCountries = ["SG", "US"];
      const country = request.headers.get("cf-ipcountry");
      var URL = ""
      if (country != null && availableCountries.includes(country)) {
        URL = `https://trackers.ninja/home/${country}`
      } else {
        URL = `https://trackers.ninja/error`
      }

      let response = await fetch(URL, request)
      
      response = new Response(response.body, response)
      response.headers.set("Foo", "Bar")
      return response
    }
}
