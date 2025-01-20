import { Wp2Storyblok } from './index.js'

const wp2storyblok = new Wp2Storyblok('https://voicenationstaging.info/wp-json', {
  token: 'j9KimjIkcwGGiL7QeXnwdwtt-137083-RTMsxG-zdoEFDpx5yvrU',
  space_id: 1019557,
  region: 'us',
  content_types: [
    {
      name: 'posts', // Post type name in WP
      new_content_type: 'article', // Content Type name in Storyblok
      folder: 'blog', // Destination folder name in Storyblok
      schema_mapping: {
        // Mapping of WP fields to Storyblok fields
        // WPfield: Storyblokfield
        "slug": "full_slug",
        "title.rendered": "story.name",
        "title.rendered": "content.title",
        "_links.wp:featuredmedia.0": "content.image",
        "date": "created_at",
        "date": "published_at",
        "date": "updated_at",

        "content": {
          "field": "content.content",
          "component": "rich-text",
          "component_field": "content"
        },

        //SEO data
        "_links.wp:featuredmedia.0": "story.content.SEO.og_image",
        "_links.wp:featuredmedia.0": "story.content.SEO.twitter_image",
        "yoast_head_json.title": "story.content.SEO.title",
        "yoast_head_json.title": "story.content.SEO.og_title",
        "yoast_head_json.title": "story.content.SEO.twitter_title",
        "yoast_head_json.description": "story.story.content.SEO.description",
        "yoast_head_json.description": "story.content.SEO.og_description",
        "yoast_head_json.description": "story.content.SEO.twitter_description",
      }
    },
  ]
})

wp2storyblok.migrate()