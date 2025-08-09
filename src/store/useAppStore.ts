/**
 * @file Application Global Store
 * @description Central state management for app-wide concerns
 * @typedef {Object} AppStates - Global application state types
 * @property {string} testMessage - Test message state
 */

import { create } from 'zustand';
const mobileDevice = 1200;

// Define the shape of the store
type AppStates = {
  width: number;
  isMobile: boolean;
  setWidth: (width: number) => void;
  
  // Modal state management
  activeModalId: string | null;
  modalData: Record<string, any> | null;
  openModal: (modalId: string, data?: Record<string, any>) => void;
  closeModal: () => void;
};

// Create the store
// The store is a hook that can be used in any component
// It will return the state and the set function
const useAppStore = create<AppStates>((set) => ({
  width: 0,
  isMobile: false,
  setWidth: (width) => set({ width, isMobile: width <= mobileDevice }),
  
  // Modal state
  activeModalId: null,
  modalData: null,
  openModal: (modalId, data = {}) => set({ activeModalId: modalId, modalData: data }),
  closeModal: () => set({ activeModalId: null, modalData: null }),
}));

export default useAppStore;
