import create from 'zustand';

const themeStore = create((set) => ({
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
}));

export default themeStore;