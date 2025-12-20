import { OpenAuth } from "@openauth/sdk";

async function test() {
  try {

    const appsecret = '86716c86dad0b6582707191337d6bbc669d2fc33eb97b781e50299f3f309612f'
    const email = 'amanuelfirew27@gmail.com'
    const res = await OpenAuth.verifyEmailOTP("111" ,'344552', appsecret);
    console.log(res);
  } catch (err) {
    console.error("API call failed:", err);
  }
}

test();
