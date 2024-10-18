import { TypeAnimation } from "react-type-animation";

export const PasswordAnimate = () => {
    return (
        <div className="flex justify-center mt-5 mx-5 sm:mx-0">
            <div
                className="text-center text-sm sm:text-lg w-full  sm:w-[600px] bg-zinc-200 dark:bg-zinc-800 rounded-lg py-3 italic font-semibold text-zinc-500 dark:text-zinc-400">
                <TypeAnimation
                    sequence={[
                        'nivel bruja garrido maximizar',
                        500,
                        'reporte elevar colocado prensa',
                        500,
                        'reja proveedor taller pasaje',
                        500,
                        'bala motor regular autopista',
                        500,
                    ]}
                    speed={40}
                    repeat={Infinity}
                />
            </div>
        </div>
    );
};