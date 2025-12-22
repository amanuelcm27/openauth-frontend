import { apiFetch } from "../client";

export function getMFAStatus(
  externalUserId: string,
  appSecret: string
) {
  return apiFetch("/mfa/status/", { external_user_id: externalUserId }, appSecret);
}