import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Section = 'hero' | 'about' | 'journey' | 'skills' | 'projects' | 'contact';
export type JourneyExperience = 'current' | 'startup' | 'education';

export interface NavigationState {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  activeJourneyExperience: JourneyExperience;
  setActiveJourneyExperience: (experience: JourneyExperience) => void;
}

export const useNavigationStore = create<NavigationState>()(
  persist(
    (set) => ({
      activeSection: 'hero',
      setActiveSection: (section: Section) => set({ activeSection: section }),
      activeJourneyExperience: 'current',
      setActiveJourneyExperience: (experience: JourneyExperience) =>
        set({ activeJourneyExperience: experience }),
    }),
    {
      name: 'current-section', storage: createJSONStorage(() => localStorage),
    }
  )
);
