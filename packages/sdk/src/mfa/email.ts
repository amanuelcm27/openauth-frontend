import { apiFetch } from "../client";

export function setupEmail(
  externalUserId: string,
  email: string,
  appSecret: string
) {
  return apiFetch("/mfa/email/setup/", { external_user_id: externalUserId, email }, appSecret);
}

export function sendEmailOTP(
  externalUserId: string,
  appSecret: string
) {
  return apiFetch("/mfa/email/send/", { external_user_id: externalUserId }, appSecret);
}

export function verifyEmailOTP(
  externalUserId: string,
  otp: string,
  appSecret: string
) {
  return apiFetch("/mfa/email/verify/", { external_user_id: externalUserId, otp }, appSecret);
}
