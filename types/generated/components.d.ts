import type { Schema, Struct } from '@strapi/strapi';

export interface SlidersSectionSlide extends Struct.ComponentSchema {
  collectionName: 'components_sliders_section_slides';
  info: {
    displayName: 'slide';
    icon: 'landscape';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sliders-section.slide': SlidersSectionSlide;
    }
  }
}
