import {Wp2Storyblok} from './index.js'
 
const wp2storyblok = new Wp2Storyblok('https://voicenationstaging.info/wp-json', {
  token: 'chmKNZ53u2SZaNrmCPIHewtt-137083-bGPPcQuUwwPbKds5Xxj4',
  space_id: 1019328,
  region: 'us',
  content_types: [
    {
        name: 'posts', // Post type name in WP
        new_content_type: 'post', // Content Type name in Storyblok
        folder: 'resources', // Destination folder name in Storyblok
        schema_mapping: {
            // Mapping of WP fields to Storyblok fields
            // WP field name: Storyblok field name
            "": "content.industry",
            "": "content.business_size",
            "title": "name",
            "": "content.subtitle",
            "_links.wp:featuredmedia.0": "content.image",
            "": "content",
        }          
    },
  ]
})
 
wp2storyblok.migrate()