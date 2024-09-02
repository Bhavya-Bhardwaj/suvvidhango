import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-10 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <GiftIcon className="w-8 h-8" />
          <span className="text-2xl font-bold">Suvidha NGO</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Donate
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Careers
          </Link>
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 px-6 md:px-10 flex flex-col items-center justify-center">
          <div className="max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Empowering Communities, Transforming Lives</h1>
            <p className="text-lg md:text-xl">
              Suvidha NGO is dedicated to making a lasting impact on the lives of those in need. Join us in our mission
              to create a more equitable and sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="solid" className="bg-primary-foreground text-primary hover:bg-primary-foreground/80">
                Donate Now
              </Button>
              <Button
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                Suvidha NGO is committed to empowering underprivileged communities and creating sustainable change. We
                focus on education, healthcare, and economic development to help individuals and families break the
                cycle of poverty.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <TargetIcon className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-bold">Our Goals</h3>
                  <p className="text-muted-foreground">
                    Achieve lasting impact through targeted initiatives and collaborative partnerships.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <CompassIcon className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-bold">Our Approach</h3>
                  <p className="text-muted-foreground">
                    Empower communities, foster innovation, and drive sustainable change.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Projects</h2>
              <p className="text-muted-foreground">
                Suvidha NGO is actively involved in a variety of projects across different sectors, each designed to
                create lasting impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <BookIcon className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-muted-foreground">
                    Providing access to quality education and skill development programs.
                  </p>
                  <Progress value={80} className="h-4 rounded-full" />
                </div>
                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <HeartIcon className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-bold">Healthcare</h3>
                  <p className="text-muted-foreground">
                    Improving healthcare infrastructure and access to essential services.
                  </p>
                  <Progress value={65} className="h-4 rounded-full" />
                </div>
                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <DollarSignIcon className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-bold">Livelihood</h3>
                  <p className="text-muted-foreground">
                    Empowering individuals and families through sustainable economic opportunities.
                  </p>
                  <Progress value={75} className="h-4 rounded-full" />
                </div>
                <div className="bg-muted rounded-lg p-6 space-y-4">
                  <DropletIcon className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-bold">Water & Sanitation</h3>
                  <p className="text-muted-foreground">Improving access to clean water and sanitation facilities.</p>
                  <Progress value={70} className="h-4 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-16 px-6 md:px-10">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center">Donate to Suvidha</h2>
            <p className="text-muted-foreground text-center">
              Your contribution can make a significant difference in the lives of those we serve. Help us continue our
              mission of empowering communities and transforming lives.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-bold">One-Time Donation</h3>
                <div className="flex items-center gap-4">
                  <Input type="number" placeholder="Enter amount" className="flex-1" />
                  <Button variant="solid" className="bg-primary text-primary-foreground">
                    Donate Now
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Your one-time donation will be used to fund our immediate initiatives and projects.
                  </p>
                  <Progress value={75} className="h-4 rounded-full" />
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 space-y-4">
                <h3 className="text-2xl font-bold">Monthly Donation</h3>
                <div className="flex items-center gap-4">
                  <Input type="number" placeholder="Enter amount" className="flex-1" />
                  <Button variant="solid" className="bg-primary text-primary-foreground">
                    Donate Monthly
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Your monthly donation will help us sustain our long-term programs and initiatives.
                  </p>
                  <Progress value={85} className="h-4 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center">Join Our Team</h2>
            <p className="text-muted-foreground text-center">
              Suvidha NGO is always looking for passionate individuals to join our team and contribute to our mission.
              Explore our current openings and apply today.
            </p>
            <div className="bg-muted rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Project Manager</h3>
                  <p className="text-muted-foreground">Full-time</p>
                </div>
                <Button variant="solid" className="bg-primary text-primary-foreground">
                  Apply Now
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Fundraising Coordinator</h3>
                  <p className="text-muted-foreground">Full-time</p>
                </div>
                <Button variant="solid" className="bg-primary text-primary-foreground">
                  Apply Now
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Community Outreach Specialist</h3>
                  <p className="text-muted-foreground">Part-time</p>
                </div>
                <Button variant="solid" className="bg-primary text-primary-foreground">
                  Apply Now
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Graphic Designer</h3>
                  <p className="text-muted-foreground">Full-time</p>
                </div>
                <Button variant="solid" className="bg-primary text-primary-foreground">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6 md:px-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GiftIcon className="w-6 h-6" />
            <span className="text-lg font-bold">Suvidha NGO</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#" className="text-base font-medium hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-base font-medium hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-base font-medium hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#" className="text-base font-medium hover:underline" prefetch={false}>
              Donate
            </Link>
            <Link href="#" className="text-base font-medium hover:underline" prefetch={false}>
              Careers
            </Link>
            <Link href="#" className="text-base font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <p className="text-base">&copy; 2024 Suvidha NGO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CompassIcon(props) {
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
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function DropletIcon(props) {
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
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  )
}


function GiftIcon(props) {
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
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}


function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function TargetIcon(props) {
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
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}