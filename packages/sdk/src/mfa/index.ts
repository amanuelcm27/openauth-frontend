import * as totp from "./totp";
import * as email from "./email";
import * as mfaStatus from "./mfaStatus";


export const OpenAuth = {
  setupTOTP: totp.setupTOTP,
  verifyTOTP: totp.verifyTOTP,
  setupEmail: email.setupEmail,
  sendEmailOTP: email.sendEmailOTP,
  verifyEmailOTP: email.verifyEmailOTP,
  getMFAStatus: mfaStatus.getMFAStatus,
};
