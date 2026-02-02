import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import PromoSection from "../components/home/PromoSection";
import RestaurantList from "../components/home/RestaurantList";
import FoodSection from "../components/home/FoodSection";
import InfoSection from "../components/home/InfoSection";

const Home = () => {
    return (
        <div className="">
            {/* 20 Sections Structure Implementation */}

            {/* 1. Navbar - Global */}
            {/* 2. Hero Section */}
            <HeroSection />

            {/* 3. Location Selector - Integrated in Hero */}

            {/* 4. Food Categories */}
            <CategorySection />

            {/* 5. Top Offers & Deals */}
            <PromoSection />

            {/* 6. Popular Near You */}
            <RestaurantList title="Popular Near You" filterType="popular" />

            {/* 7. Trending Foods - (Handled via FoodSection later or separate) */}

            {/* 8. Top Rated Restaurants */}
            <RestaurantList title="Top Rated Restaurants" filterType="top-rated" />

            {/* 9. Newly Added Restaurants */}
            <RestaurantList title="Newly Added" filterType="new" />

            {/* 10. Fast Delivery Restaurants */}
            <RestaurantList title="Fastest Delivery" filterType="fast" />

            {/* 11, 12, 13. Smart Sections */}
            <FoodSection />

            {/* 14, 15, 16. Info/Engagement */}
            <InfoSection />

            {/* 17, 18, 19. Branding/Trust - Included in InfoSection */}

            {/* 20. Footer - Global */}
        </div>
    );
};

export default Home;
