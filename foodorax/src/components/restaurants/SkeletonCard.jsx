const SkeletonCard = () => {
    return (
        <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 flex flex-col gap-4 animate-pulse">
            {/* Image Skeleton */}
            <div className="w-full h-48 bg-gray-200 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* Content Skeleton */}
            <div className="space-y-3">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="flex gap-2">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
                <div className="h-0.5 bg-gray-100 my-2"></div>
                <div className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
