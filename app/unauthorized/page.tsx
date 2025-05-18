import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldAlert } from "lucide-react"

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <ShieldAlert className="h-16 w-16 text-destructive mb-4" />
      <h1 className="text-3xl font-bold tracking-tight mb-2">Access Denied</h1>
      <p className="text-muted-foreground mb-6 max-w-md">
        You don't have permission to access this page. Please contact an administrator if you believe this is an error.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/login">Login with Different Account</Link>
        </Button>
      </div>
    </div>
  )
}
