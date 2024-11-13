export interface License {
  id: number;
  key: string;
  active: boolean;
  expiration_date: string;
  subscription_type: string;
  support_name: string | null;
  device_id: string | null;
  activated: boolean;
  key_type: string;
}