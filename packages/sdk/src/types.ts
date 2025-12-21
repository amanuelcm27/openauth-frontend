export interface OpenAuthConfig {
  appSecret: string;
  apiBaseUrl?: string;
}

export interface EmailSetupParams {
  externalUserId: string;
  email: string;
}
