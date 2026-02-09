import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Section = 'hero' | 'about' | 'journey' | 'skills' | 'projects' | 'contact';

export interface NavigationState {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export const useNavigationStore = create<NavigationState>()(
  persist(
    (set) => ({
      activeSection: 'hero',
      setActiveSection: (section: Section) => set({ activeSection: section }),
    }),
    {
      name: 'current-section', storage: createJSONStorage(() => localStorage),
    }
  )
);
