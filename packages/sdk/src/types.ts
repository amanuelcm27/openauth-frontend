export interface OpenAuthConfig {
  appSecret: string;
  apiBaseUrl?: string;
}

export interface EmailSetupParams {
  externalUserId: string;
  email: string;
}

export interface OTPVerifyParams {
  externalUserId: string;
  otp: string;
}

export interface TOTPSetupParams {
  externalUserId: string;
}
