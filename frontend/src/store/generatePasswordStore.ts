import { GeneratePasswordState } from "@/types/generatePasswordTypes";
import { create } from "zustand";

export const useGeneratePasswordStore = create<GeneratePasswordState>(
	(set) => ({
		formGeneratePassword: {
			count: 4,
			type: "space",
			isSpanish: true,
		},
		changeFormGeneratePassword: (name, value) =>
			set((state) => ({
				formGeneratePassword: {
					...state.formGeneratePassword,
					[name]: value,
				},
			})),
	}),
);
