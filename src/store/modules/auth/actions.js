export default {
  login() {},
  async signup(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDVLCDn_httyZX9fzNp7JaNxhKrZCmXL_k",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();

    //응답이 정상적이지 않은경우
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to authenticate");
      throw error;
    }

    console.log(responseData);
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};
