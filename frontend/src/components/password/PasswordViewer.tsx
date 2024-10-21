
export const PasswordViewer: React.FC<{ password: string }> = ({ password }) => {
    return (
        <div className="flex justify-center mt-5 mx-5 sm:mx-0">
            <div
                className="text-center text-xs sm:text-lg w-full sm:w-[600px] bg-zinc-200 dark:bg-zinc-800 rounded-lg py-3 px-1 font-semibold text-zinc-900 dark:text-zinc-100">
                {password}
            </div>
        </div>
    );
};