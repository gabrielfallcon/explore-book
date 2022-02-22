type AccessInfoProps = {
  accessViewStatus?: string;
  country?: string;
  embeddable?: boolean;
  epub?: { isAvailable?: boolean; };
  pdf?: { isAvailable?: boolean; };
  publicDomain?: boolean;
  quoteSharingAllowed?: boolean;
  textToSpeechPermission?: string;
  viewability?: string;
  webReaderLink?: string;
}

type SaleInfoProps = {
  country?: string;
  isEbook?: boolean;
  saleability?: string;
  retailPrice?: {
    amount?: number;
  }
}

export interface ProductProps {
  allowAnonLogging?: boolean;
  authors?: String[];
  averageRating?: number;
  canonicalVolumeLink?: string;
  categories?: String[];
  contentVersion?: string;
  description?: string;
  dimensions?: { height?: string; };
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
  };
  industryIdentifiers?: { type?: string; identifier?: string; }[];
  infoLink?: string;
  language?: string;
  maturityRating?: string;
  pageCount?: number;
  panelizationSummary?: {
    containsEpubBubbles?: boolean;
    containsImageBubbles?: boolean;
  };
  previewLink?: string;
  printType?: string;
  printedPageCount?: number;
  publishedDate?: string;
  publisher?: string;
  ratingsCount?: number;
  readingModes?: {
    image?: boolean;
    text?: boolean;
  };
  subtitle?: string;
  title?: string;
}

export interface ItemsProps {
  etag?: string;
  id?: string;
  selfLink?: string;
  accessInfo?: AccessInfoProps;
  saleInfo?: SaleInfoProps;
  volumeInfo?: ProductProps;
  kind?: string;
}

export interface DataProps {
  product?: ItemsProps;
} 