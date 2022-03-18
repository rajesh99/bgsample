# Google appengine routing - dispatch.yaml

## 1. default-standard

The appengine standard main server with a dispatch.yaml
## 2. prolisting-standard
service: prolisting
routing: bgsample.appspot.com/prolisting

The appengine standard deployed as prolisting service

## 3. gatsby-standard
service: gatsby
routing: bgsample.appspot.com/gatsby

gatsby project: The 'gatsby build' files are in the public folder.
The appengine standard deployed as 'gatsby' service.

app.yaml: Handlers are added to service the gatsby generated files.

### There are two issues and hence not usable
1st issue:

https://bgsample.appspot.com/gatsby/  - this works
https://bgsample.appspot.com/gatsby - this does not work - why?

2nd issue:

https://bgsample.appspot.com/gatsby/ - Then click on 'A' link it works.

Now you do refresh, it does not work.  Following displays on the browser

"Error: Not Found.
The requested URL /gatsby/a/ was not found on this server."


## 4. gatsby-express-standard
service: gatsby-express
routing: bgsample.appspot.com/gatsby-express

Use the plugin 'https://github.com/wille/gatsby-plugin-express'

Follow the example 'https://github.com/gatsbyjs/gatsby/tree/master/examples/using-path-prefix'

