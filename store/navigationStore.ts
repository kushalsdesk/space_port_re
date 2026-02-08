import { create } from 'zustand';

export type Section = 'hero' | 'about' | 'journey' | 'skills' | 'projects' | 'contact';

export interface NavigationState {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: 'hero',
  setActiveSection: (section: Section) => set({ activeSection: section }),
}));
