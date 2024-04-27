export type AmountType = {
  price: number;
  offerPrice: number;
};

export type CourseDataType = {
  id: string;
  title: string;
  "title-price": string;
  "sub-title": string;
  by: string;
  byUrl: string;
  features: Array<string>;
  attempt: string;
  mode: string;
  "extra-features": Array<string>;
  description: Record<string, string>;
  imgUrl: string;
  "related-products": Array<string>;
  pi?: Record<string, string>;
  amount: AmountType;
  type: "string";
  group: "string" | undefined | null;
};

export type ParentCategoryEnumType = "foundation" | "courses" | "";

export type ProductVariantType = CourseDataType & {
  mode: Array<string>;
  attempt: Array<string>;
};
