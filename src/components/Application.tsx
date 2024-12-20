import apple from "../assets/apple-logo.png"
import playstore from "../assets/playstore.png"
function Application() {
    return (
        <div className='flex flex-col w-full h-full space-y-10 items-center'>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center">Manage Your Business On the Go</h2>
            <p className="text-muted-foreground text-sm text-center w-full md:w-1/2">With free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you.</p>
            <div className="flex items-center justify-center gap-2">
                <div className="flex gap-2 items-center justify-center border px-4 py-2 rounded-md">
                    <img src={apple} alt="Apple Store" />
                    <span className="font-semibold">App Store</span>
                </div>
                <div className="flex gap-2 items-center justify-center border px-4 py-2 rounded-md">
                    <img src={playstore} alt="Apple Store" />
                    <span className="font-semibold">Google Play</span>
                </div>
            </div>
        </div>
    )
}

export default Application