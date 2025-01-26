import Image from "next/image";

export default function Call2Action() {
    return (
        <section id="cta" className="relative h-96 md:h-72 w-full overflow-hidden flex-shrink-0 bg-black text-white flex items-center justify-center text-center">
            <Image
                src={"/scott-graham-5fNmWej4tAA-unsplash.jpg"}
                alt={"Image of a person holding a pencil near a laptop computer"}
                style={{ objectPosition: "center center", objectFit: "cover" }}
                fill={true}
                sizes="100vw"
                className="group-hover:scale-110 transition-transform duration-300 bg-blend-overlay opacity-20"
            />
            <div className="flex flex-col items-center h-full p-5 justify-between space-y-4 z-10">
                <div></div>
                <div className="space-y-4">
                    <h3 className="text-4xl">Join <strong>Scientry</strong> now!</h3>
                    <p className="text-xl">Start excelling in the Research and stay up-to-date!</p>
                </div>
                <p className="text-sm opacity-25 hover:opacity-75">Photo by <a href="https://unsplash.com/@homajob?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Scott Graham</a> on <a href="https://unsplash.com/photos/person-holding-pencil-near-laptop-computer-5fNmWej4tAA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">Unsplash</a></p>
            </div>
        </section>
    )
}