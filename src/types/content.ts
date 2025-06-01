export interface Content {
  navigation: {
    brand_name: string;
    tagline: string;
    menu_items: Array<{
      name: string;
      url: string;
    }>;
  };
  home: {
    hero: {
      heading: string;
      description: string;
    };
  };
  about: {
    heading: string;
    description: string;
    content: string;
  };
  services: {
    heading: string;
    description: string;
    packages: Array<{
      name: string;
      description: string;
      price: string;
      features: string[];
    }>;
  };
  contact: {
    heading: string;
    description: string;
    form: {
      fields: Array<{
        name: string;
        type: string;
        required: boolean;
      }>;
      email: string;
    };
  };
  footer: {
    brand_name: string;
    email: string;
    copyright: string;
  };
  brand_colors: {
    primary: string;
    secondary: string;
    accent: string;
    highlight: string;
  };
}
