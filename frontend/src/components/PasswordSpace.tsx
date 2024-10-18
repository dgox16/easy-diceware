
export const PasswordSpace: React.FC<{ password: string }> = ({ password }) => {
    return (
        <div className="flex justify-center mt-5">
            <div
                className="text-center text-lg w-[600px] bg-zinc-200 dark:bg-zinc-800 rounded-lg py-3 font-semibold text-zinc-900 dark:text-zinc-100">
                {password}
            </div>
        </div>
    );
};