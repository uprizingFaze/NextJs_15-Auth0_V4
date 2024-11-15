import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">About This Project</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Next.js 15 + Auth0 Demo</CardTitle>
            <CardDescription>A practical implementation of authentication</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This project demonstrates the integration of Auth0 authentication with 
              Next.js 15, showcasing modern web development practices and secure 
              user authentication flows.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>What makes this project special</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Next.js 15 App Router implementation</li>
              <li>Auth0 authentication integration</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>Shadcn UI components</li>
              <li>Responsive design</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
            <CardDescription>Technologies used in this project</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Next.js 15</li>
              <li>TypeScript</li>
              <li>Auth0</li>
              <li>Tailwind CSS</li>
              <li>Shadcn UI</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>How to use this project</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Clone the repository, install dependencies, and configure your Auth0 
              credentials. This demo provides a solid foundation for building 
              authenticated applications with Next.js 15.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
