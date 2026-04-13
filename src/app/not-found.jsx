import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-[oklch(20.84%_0.008_17.911)] text-white">
            <div className="text-center max-w-2xl p-6 rounded-lg shadow-lg bg-neutral m-9">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-lg mb-6">Oops! The page you're looking for cannot be found.</p>
                <p className="mb-4 text-neutral-200">It seems like you've wandered off the path. But don't worry, you can find your way back.</p>
                <Link href="/" className="btn btn-primary">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;