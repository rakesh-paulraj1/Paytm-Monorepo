import Image from "next/image";
import Link from "next/link";
const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="gray">
    <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387 0.599 0.11 0.793-0.26 0.793-0.577 0-0.285-0.011-1.041-0.016-2.045-3.338 0.724-4.042-1.611-4.042-1.611-0.546-1.387-1.333-1.757-1.333-1.757-1.089-0.745 0.083-0.729 0.083-0.729 1.205 0.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.492 0.998 0.109-0.774 0.418-1.305 0.762-1.605-2.665-0.305-5.466-1.333-5.466-5.932 0-1.311 0.469-2.381 1.238-3.221-0.124-0.303-0.535-1.526 0.117-3.176 0 0 1.008-0.323 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.046 0.138 3.005 0.404 2.289-1.553 3.296-1.23 3.296-1.23 0.654 1.65 0.243 2.873 0.119 3.176 0.771 0.84 1.238 1.91 1.238 3.221 0 4.61-2.803 5.625-5.475 5.921 0.43 0.372 0.823 1.102 0.823 2.222 0 1.606-0.015 2.898-0.015 3.293 0 0.32 0.192 0.694 0.801 0.577 4.765-1.587 8.198-6.086 8.198-11.385 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="gray">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.505c.607-.934 1.74-1.505 3-1.505 1.985 0 3.5 1.567 3.5 3.5v6z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="gray">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.423.725-.666 1.567-.666 2.465 0 1.701.866 3.2 2.181 4.078-.804-.026-1.561-.247-2.228-.616v.061c0 2.372 1.689 4.348 3.932 4.797-.411.112-.844.171-1.292.171-.316 0-.623-.03-.924-.086.624 1.956 2.434 3.379 4.579 3.419-1.68 1.319-3.808 2.106-6.115 2.106-.398 0-.79-.023-1.175-.069 2.179 1.396 4.768 2.21 7.548 2.21 9.057 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.636.962-.695 1.8-1.562 2.463-2.549z"/>
  </svg>
);

export default function Component() {
  return (
    <div>
     
     <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center bg-white border-b-2 border-slate-300 h-16 px-8">
        <div className="text-lg font-bold flex flex-col justify-center">
          Payments APP
        </div>
        <div className="flex flex-col justify-center pt-2">
     <Link href="/login">
     <div className="w-full px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">Login
      </div></Link>
        </div>
      </div>
      
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Secure and Seamless Payments
              </h1>
              <p className="text-lg text-primary-foreground md:text-xl lg:text-2xl">
                Empower your business with our cutting-edge payment solution. Trusted by thousands of merchants worldwide.
              </p>
              <div className="text-2xl font-bold">Created by Rakesh.P</div>
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                {/* App Bar Icons */}
                <div className="flex space-x-4 mt-4">
                  <a href="https://github.com/rakesh-paulraj1" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                  </a>
                  <a href="https://www.linkedin.com/in/rakesh-p-a669b0249/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                  </a>
                  <a href="https://x.com/RakeshPaulraj1" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
          <Image src={"/hero.jpg"} alt="Image" width="400" height="400"></Image>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
