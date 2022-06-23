export type LimitType = {
  min: number;
  max: number;
};

export type FeeType = {
  merchant: number;
  user: number;
  default: number;
  fee_fix?: number | null;
};

export type EmailType = {
  type: string;
  placeholder: string;
  value: string;
  required: boolean;
  validate: string;
};

export type FieldsType = {
  email: EmailType;
};

export type PaymentMethodType = {
  currency: string;
  fee: FeeType;
  fields: FieldsType;
  id: number;
  is_enabled: number;
  is_favorite: number;
  limits: LimitType;
  name: string;
};

export const selectedPatmentMethodinitialState = {
  currency: '',
  fee: {
    merchant: 0,
    user: 0,
    default: 0,
  },
  fields: {
    email: {
      type: '',
      placeholder: '',
      value: '',
      required: false,
      validate: '',
    },
  },
  id: 0,
  is_enabled: 0,
  is_favorite: 0,
  limits: {
    min: 0,
    max: 0,
  },
  name: '',
};
