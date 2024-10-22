import { PasswordGenerateRequest } from "@/types/PasswordGenerateTypes";
import { create } from "zustand";

type ChangePasswordGenerateType = (
	name: keyof PasswordGenerateRequest,
	value: string | number | boolean,
) => void;

interface GeneratePasswordState {
	formGeneratePassword: PasswordGenerateRequest;
	changeFormGeneratePassword: ChangePasswordGenerateType;
}

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
