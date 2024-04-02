"use client";

import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newURL = updateSearchParams("limit", newLimit.toString());

        router.push(newURL, { scroll: false });
    };
    return (
        <div className="w-full flex-center mt-10 gap-5">
            {!isNext && (
                <CustomButton title="Show More"
                    containerStyles="bg-primary-blue p-4 rounded-full"
                    textStyles="text-white font-[14px] font-semibold"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore