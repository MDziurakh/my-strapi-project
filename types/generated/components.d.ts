import type { Schema, Struct } from '@strapi/strapi';

export interface MediaVideo extends Struct.ComponentSchema {
  collectionName: 'components_media_videos';
  info: {
    displayName: 'video';
    icon: 'television';
  };
  attributes: {
    altText: Schema.Attribute.String;
    aspect: Schema.Attribute.Enumeration<['a16/9', 'a3/2', 'a1/1']> &
      Schema.Attribute.Required;
    autoplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    controls: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    loop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    muted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    poster: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['arch-top', 'plain', 'curve-bl']> &
      Schema.Attribute.Required;
    video: Schema.Attribute.Media<'files' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'about';
    icon: 'layout';
  };
  attributes: {
    about_video: Schema.Attribute.Component<'media.video', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    description_bold: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
    icon: 'layout';
  };
  attributes: {
    bg_cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    description_special: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'media.video': MediaVideo;
      'sections.about': SectionsAbout;
      'sections.hero': SectionsHero;
    }
  }
}
