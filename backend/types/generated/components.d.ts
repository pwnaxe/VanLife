import type { Schema, Attribute } from '@strapi/strapi';

export interface AuthorAuthor extends Schema.Component {
  collectionName: 'components_author_authors';
  info: {
    displayName: 'author';
  };
  attributes: {
    name: Attribute.String;
    role: Attribute.String;
    imageUrl: Attribute.Media;
  };
}

export interface PostPost extends Schema.Component {
  collectionName: 'components_post_posts';
  info: {
    displayName: 'post';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    text: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'author.author': AuthorAuthor;
      'post.post': PostPost;
    }
  }
}
