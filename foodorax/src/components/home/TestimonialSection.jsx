import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Food Blogger",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
        text: "FoodoraX is a lifesaver! The delivery is always on time, and the food arrives hot. The Gold membership is totally worth it for the free delivery.",
        rating: 5
    },
    {
        id: 2,
        name: "Rahul Verma",
        role: "Software Engineer",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80",
        text: "Reviewing this after 50 orders: Consistent quality and the best app UI I've seen. Super smooth experience!",
        rating: 5
    },
    {
        id: 3,
        name: "Sneha Patel",
        role: "Student",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
        text: "Love the variety of healthy options. 'Budget Friendly Eats' section is my go-to for daily lunch. Highly recommended!",
        rating: 4
    }
];

const TestimonialSection = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Customer Love</span>
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-2">What Our Users Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative hover:shadow-xl transition-shadow duration-300">
                            <FaQuoteLeft className="text-4xl text-primary/10 absolute top-8 left-8" />

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-50" />
                                <div>
                                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                                    <p className="text-xs text-gray-500 font-bold uppercase">{t.role}</p>
                                </div>
                            </div>

                            <div className="flex text-yellow-400 text-sm mb-4">
                                {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                            </div>

                            <p className="text-gray-600 leading-relaxed italic">
                                "{t.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
