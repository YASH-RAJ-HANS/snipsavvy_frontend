import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full text-gray-50">
      <header className="px-4 lg:px-6 h-28 flex items-center bg-[#0E1116]">
        <Link className="flex items-center justify-center" href="#">
          <img src="logo.png" className="w-10" alt="" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-lg font-medium hover:underline underline-offset-4 text-gray-50"
            href="#"
          >
            Features
          </Link>

          <Link
            className="text-lg font-medium hover:underline underline-offset-4 text-gray-50"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4 text-gray-50"
            href="#"
          >
            Contact
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4 flex items-center text-gray-50"
            href="#"
          >
            <GithubIcon className="h-5 w-5 mr-1" />
            GitHub
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-8 md:py-24 lg:py-32 xl:py-40 bg-[#0E1116] hero">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-10 text-center">
              <div className="space-y-2 content">
                <h1
                  // style={{ textShadow: "0px 0px 10px #006BCB" }}
                  className=" text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none "
                >
                  Manage Your Code Snippets with Ease
                </h1>
                {/* <p
                  style={{ marginTop: "20px" }}
                  className="mx-auto max-w-[700px] text-secondary md:text-xl"
                >
                  SnipSavvy is a powerful SaaS tool that helps you organize,
                  share, and access your code snippets from anywhere. Stop
                  wasting time searching for that one snippet you need.
                </p> */}
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-xl bg-[#045AA6] px-4 py-2 text-lg font-medium text-gray-300 shadow transition-colors hover:bg-[#045AA6]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#045AA6]-300 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Get Started
                </Link>
                {/* <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-700 bg-gray-900 px-4 py-2 text-lg font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#045AA6]-300 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  <GithubIcon className="h-5 w-5 mr-1" />
                  GitHub
                </Link> */}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0E1116] text-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-lg text-gray-50">
                    Key Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#045AA6]">
                    Organize Your Code Snippets with Ease
                  </h2>
                  <p className="max-w-[600px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    SnipSavvy provides a clean and intuitive interface to help
                    you quickly find, organize, and share your code snippets.
                    Never waste time searching for that one snippet you need
                    again.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#00B4D8]" />
                    <span className="text-[#00B4D8]">
                      Powerful search and filtering
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#00B4D8]" />
                    <span className="text-[#00B4D8]">
                      Seamless integration with your workflow
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#00B4D8]" />
                    <span className="text-[#00B4D8]">
                      Secure sharing and collaboration
                    </span>
                  </li>
                </ul>
              </div>
              <img
                style={{ boxShadow: "0px 0px 10px 10px #006BCB" }}
                alt="SnipSavvy"
                className="mx-auto w-[120%] aspect-video rounded-xl object-contain object-center sm:w-full lg:order-last"
                height="400"
                src="/photo.png"
                width="650"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0E1116]">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2
                style={{ textShadow: "0px 0px 10px #006BCB" }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-50"
              >
                Benefits of Using SnipSavvy
              </h2>
              <p className="mx-auto max-w-[700px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SnipSavvy helps you save time, improve productivity, and
                collaborate more effectively with your team.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-sm transition-colors hover:bg-gray-800 text-gray-50">
                <div className="flex items-center gap-4">
                  <ClockIcon className="h-8 w-8 text-[#045AA6]" />
                  <h3 className="text-xl font-bold">Save Time</h3>
                </div>
                <p className="mt-2 text-secondary">
                  Quickly find and reuse the code snippets you need, reducing
                  development time and increasing productivity.
                </p>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-sm transition-colors hover:bg-gray-800 text-gray-50">
                <div className="flex items-center gap-4">
                  <FolderIcon className="h-8 w-8 text-[#045AA6]" />
                  <h3 className="text-xl font-bold">Stay Organized</h3>
                </div>
                <p className="mt-2 text-secondary">
                  Keep your code snippets neatly organized and easily
                  accessible, so you can focus on writing great code.
                </p>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-sm transition-colors hover:bg-gray-800 text-gray-50">
                <div className="flex items-center gap-4">
                  <UsersIcon className="h-8 w-8 text-[#045AA6]" />
                  <h3 className="text-xl font-bold">Collaborate Effectively</h3>
                </div>
                <p className="mt-2 text-secondary">
                  Share and collaborate on code snippets with your team,
                  ensuring everyone has access to the resources they need.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0E1116] text-gray-50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2
                style={{ textShadow: "0px 0px 10px #006BCB" }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#fff]"
              >
                Upcoming Features
              </h2>
              <p className="mx-auto max-w-[700px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SnipSavvy is constantly evolving to meet your needs. Check out
                some of the exciting features we have in the works.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-700  p-6 shadow-sm transition-colors hover:bg-gray-800 text-gray-50">
                <div className="flex items-center gap-4">
                  <CodeIcon className="h-8 w-8 text-[#045AA6]" />
                  <h3 className="text-xl font-bold">Snippet Versioning</h3>
                </div>
                <p className="mt-2 text-secondary">
                  Track changes to your code snippets and easily revert to
                  previous versions.
                </p>
              </div>
              <div className="rounded-lg border border-gray-700 bg-[#0E1116] p-6 shadow-sm transition-colors hover:bg-gray-800 text-gray-50">
                <div className="flex items-center gap-4">
                  <LayersIcon className="h-8 w-8 text-[#045AA6]" />
                  <h3 className="text-xl font-bold">Snippet Templating</h3>
                </div>
                <p className="mt-2 text-secondary">
                  Create and apply custom templates to your code snippets for
                  consistent formatting.
                </p>
              </div>
              <div className="rounded-lg border border-gray-700 bg-[#0E1116] p-6 shadow-sm transition-colors hover:bg-gray-800 text-gray-50">
                <div className="flex items-center gap-4">
                  <CloudIcon className="h-8 w-8 text-[#045AA6]" />
                  <h3 className="text-xl font-bold">Cloud Sync</h3>
                </div>
                <p className="mt-2 text-secondary">
                  Seamlessly sync your code snippets across all your devices for
                  easy access from anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0E1116] p-6 md:py-12 lg:py-16 w-full">
        <div className="container max-w-7xl flex flex-col gap-6 items-center justify-between md:flex-row">
          <Link className="flex items-center gap-2 text-gray-50" href="#">
            <img src="welcome_logo.png" className="w-48" alt="" />
          </Link>
          <div className="flex gap-4 text-lg text-secondary">
            <Link className="hover:underline" href="#">
              Terms of Service
            </Link>
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:underline" href="#">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FolderIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LayersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>

  );
}
