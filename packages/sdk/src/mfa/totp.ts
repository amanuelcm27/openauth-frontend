import { apiFetch } from "../client";

export function setupTOTP(
  externalUserId: string,
  appSecret: string
) {
  return apiFetch("/mfa/totp/setup/", { external_user_id: externalUserId }, appSecret);
}

export function verifyTOTP(
  externalUserId: string,
  otp: string,
  appSecret: string
) {
  return apiFetch("/mfa/totp/verify/", { external_user_id: externalUserId, otp }, appSecret);
}
