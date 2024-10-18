import { create } from 'zustand'

interface LanguageState {
    isSpanish: boolean
    changeLanguage: (language: boolean) => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
    isSpanish: true,
    changeLanguage: (language: boolean) => set({ isSpanish: language }),

}))