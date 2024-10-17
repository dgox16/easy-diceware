import {Slider} from "@/components/ui/slider"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const PasswordForm = () => {
    return (
        <div className="flex justify-center mt-5">
            <div className="grid grid-cols-2 gap-8 w-[600px]">
                <Slider defaultValue={[3]} min={3} max={6} step={1} onValueChange={(e) => console.log(e)}/>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

            </div>
        </div>
    );
};