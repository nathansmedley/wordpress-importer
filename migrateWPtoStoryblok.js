import { Wp2Storyblok } from './index.js'

const wp2storyblok = new Wp2Storyblok('https://voicenationstaging.info/wp-json', {
  token: 'j9KimjIkcwGGiL7QeXnwdwtt-137083-RTMsxG-zdoEFDpx5yvrU',
  space_id: 1019557,
  region: 'us',
  content_types: [
    {
      name: 'posts', // Post type name in WP
      new_content_type: 'article', // Content Type name in Storyblok
      folder: 'resources/blog', // Destination folder name in Storyblok
      schema_mapping: {
        // Mapping of WP fields to Storyblok fields
        // WPfield: Storyblokfield
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