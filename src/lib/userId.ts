export const getOrCreateUserId = () => {
  let userId = localStorage.getItem("ramadan_user_id");

  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem("ramadan_user_id", userId);
  }

  return userId;
};
