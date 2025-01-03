import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <header className="bg-gray-800 w-full text-white py-4">
                <h1 className="text-3xl font-bold text-center">Welcome to Our Restaurant</h1>
                <p className="text-center mt-2">Reserve your table today for a delightful dining experience!</p>
            </header>

            <main className="flex flex-col items-center justify-center py-10 px-6">
                <img
                    src="/website-design-preview-533265.jpg" // Replace this with your restaurant's image
                    alt="Restaurant"
                    className="rounded-lg shadow-lg w-full md:w-1/2 mb-8"
                />
                

                <p className="text-xl text-gray-700 text-center max-w-2xl">
                    Indulge in the best dishes crafted with love and fresh ingredients. Whether it's a cozy dinner
                    for two or a celebration with friends, we make every meal memorable.
                </p>

                <Link href="/booking">
                    <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-500 transition">
                        Book a Table Now
                    </button>
                </Link>

            </main>

            <footer className="bg-gray-800 w-full text-white py-4 mt-auto">
                <p className="text-center">
                    © {new Date().getFullYear()} Our Restaurant. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
