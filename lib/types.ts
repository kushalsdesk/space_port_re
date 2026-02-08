export type Section = 'hero' | 'about' | 'journey' | 'skills' | 'projects' | 'contact';

export interface NavigationState {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}
