export interface LocalUserData {
  username: string;
  currentStreak: number;
  longestStreak: number;
  totalPoints: number;
  completedDays: number[];
  lastCompletedDate: string | null;
}

const STORAGE_KEY = 'majlis_shual_user';

export const getLocalUser = (): LocalUserData => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }

  const newUser: LocalUserData = {
    username: 'مستخدم مجهول',
    currentStreak: 0,
    longestStreak: 0,
    totalPoints: 0,
    completedDays: [],
    lastCompletedDate: null,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  return newUser;
};

export const updateLocalUser = (data: Partial<LocalUserData>): LocalUserData => {
  const current = getLocalUser();
  const updated = { ...current, ...data };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const completeDay = (dayNumber: number, points: number): LocalUserData => {
  const current = getLocalUser();

  if (current.completedDays.includes(dayNumber)) {
    return current;
  }

  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  let newStreak = current.currentStreak;
  if (!current.lastCompletedDate) {
    newStreak = 1;
  } else if (current.lastCompletedDate === yesterday) {
    newStreak = current.currentStreak + 1;
  } else if (current.lastCompletedDate !== today) {
    newStreak = 1;
  }

  return updateLocalUser({
    completedDays: [...current.completedDays, dayNumber],
    currentStreak: newStreak,
    longestStreak: Math.max(current.longestStreak, newStreak),
    totalPoints: current.totalPoints + points,
    lastCompletedDate: today,
  });
};

export const isDayCompleted = (dayNumber: number): boolean => {
  const user = getLocalUser();
  return user.completedDays.includes(dayNumber);
};

export const resetProgress = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
