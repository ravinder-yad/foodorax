const offers = [
    { id: 1, title: "Flat 50% OFF", desc: "On your first order", bg: "bg-gradient-to-r from-purple-500 to-indigo-600", code: "WELCOME50" },
    { id: 2, title: "Free Delivery", desc: "On orders above ₹149", bg: "bg-gradient-to-r from-orange-400 to-red-500", code: "FREEDEL" },
    { id: 3, title: "Combo Special", desc: "Burger + Coke @ ₹99", bg: "bg-gradient-to-r from-green-400 to-teal-500", code: "COMBO99" },
];

const PromoSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {offers.map((offer) => (
                    <div
                        key={offer.id}
                        className={`${offer.bg} rounded-3xl p-6 text-white shadow-lg relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300`}
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full -ml-8 -mb-8"></div>

                        <h3 className="text-2xl font-bold mb-1">{offer.title}</h3>
                        <p className="text-white/90 mb-4 font-medium">{offer.desc}</p>
                        <div className="bg-white/20 backdrop-blur-sm inline-block px-4 py-1 rounded-lg border border-white/30 text-sm font-mono tracking-wider">
                            Code: {offer.code}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PromoSection;
