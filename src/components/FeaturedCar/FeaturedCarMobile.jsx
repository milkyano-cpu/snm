export default function FeaturedCarMobile() {
  return (
    <section data-animate className="flex flex-col gap-16 py-20">
      <h2 className="mx-auto max-w-55 text-center text-3xl font-medium">
        Your Car Might Be Featured
      </h2>
      <div className="fading-border mx-auto w-84 grow py-8">
        <div className="featured-car mx-auto flex max-w-55 flex-col gap-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-white text-lg font-light text-black">
              <span>1</span>
            </div>
            <p className="font-bold">
              Professional photographers will capture the night
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 text-center">
            <div className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-white text-lg font-light text-black">
              <span>2</span>
            </div>
            <p className="font-bold">Enter your email + car / bike details.</p>
          </div>

          <div className="flex flex-col gap-6 text-center">
            <div className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-white text-lg font-light text-black">
              <span>3</span>
            </div>
            <p className="font-bold">
              You&apos;ll receive access to event photos after the meet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
